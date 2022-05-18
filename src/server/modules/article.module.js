import mysql from 'mysql';
import config from '../../config/config';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { createClient } from 'redis';

const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: config.mysqlHost,
    user: config.mysqlUserName,
    password: config.mysqlPass,
    database: config.mysqlDatabase
});

const client = createClient();
const defaultExpirationTime = 3600;

const createArticle = (insertValues) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
            if (connectionError) {
                reject(connectionError); // 若連線有問題回傳錯誤
            } else {
                connection.query('INSERT INTO Article SET ?', insertValues, (error, result) => { // Article資料表寫入一筆資料
                    if (error) {
                        console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤
                        reject(error);
                    } else if (result.affectedRows === 1) {
                        resolve(`新增成功！ article_id: ${result.insertId}`); // 寫入成功回傳寫入id
                    }
                    connection.release();
                });
            }
        });
    });
};

const selectArticle = () =>{
    return new Promise((resolve,reject)=>{
        connectionPool.getConnection((connectionError,connection)=>{
            if(connectionError){
                reject(connectionError);
            }else{
                connection.query(
                    `SELECT * FROM Article`,
                    (error,result)=>{
                        if(error){
                            console.error('SQL error: ', error);
                            reject(error);
                        }else{
                            resolve(result);
                        }
                        connection.release();
                    }
                )
            }
        })
    })
}

const selectPersonalArticle = (token) =>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token, 'my_secret_key', async (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                await client.connect();
                //撈取資料庫該用戶的所有文章
                const userId = decoded.payload.user_id;
                var userArticle = await client.get(`personal?userId=${userId}`);

                if (userArticle != null) {
                    console.log('Cache Hit');
                    await client.quit();
                    resolve(JSON.parse(userArticle));
                } else {
                    console.log('Cache Miss');
                    connectionPool.getConnection((connectionError, connection) => {
                        if (connectionError) {
                            reject(connectionError);
                        } else {
                            connection.query(
                                'SELECT * FROM Article WHERE user_id = ?', [userId], async (error, result) => {
                                    if (error) {
                                        reject(error);
                                    } else {
                                        console.log(result);
                                        await client.setEx(`personal?userId=${userId}`, defaultExpirationTime, JSON.stringify(result));
                                        await client.quit();
                                        resolve(result);
                                    }
                                    connection.release();
                                }
                            );
                        }
                    });
                }

                //resolve(payload); // 驗證成功回傳 payload data
            }
        })
    })
}

const modifyArticle =(insertValues,articleId)=>{
    return new Promise((resolve,reject)=>{
        connectionPool.getConnection((connectionError,connection)=>{
            if(connectionError){
                reject(connectionError);
            }else{
                connection.query(`UPDATE Article SET ? WHERE article_id = ?`, [insertValues, articleId],(error,result)=>{
                    if (error) {
                        console.error(`SQL error: ${error}`);
                    }else if(result.affectedRows === 0){
                        resolve('Confirm article Id');
                    }else if(result.message.match('Changed: 1')){
                        resolve('Data modify success');
                    }else{
                        resolve('No Change');
                    }
                    connection.release();
                })
            }
        })
    })
}

const deleteArticle = (articleId) =>{
    return new Promise((resolve,reject)=>{
        connectionPool.getConnection((connectionError,connection)=>{
            if(connectionError){
                reject(connectionError);
            }else{
                connection.query(`DELETE FROM Article WHERE article_id = ?`, articleId,(error,result)=>{
                    if(error){
                        console.error(`SQL error: ${error}`);
                    }else if(result.affectedRows === 1){
                        resolve(`Delete Article ${articleId} Success`);
                    }else{
                        resolve(`Delete fail!`);
                    }
                    connection.release();
                })
            }
        })
    })
}

export default {
    createArticle,
    selectArticle,
    modifyArticle,
    deleteArticle,
    selectPersonalArticle
};