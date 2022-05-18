import bcrypt from 'bcryptjs/dist/bcrypt';
import mysql from 'mysql';
import config from '../../config/config';
import AppError from '../helper/AppError';
import jwt from 'jsonwebtoken';

const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: config.mysqlHost,
    user: config.mysqlUserName,
    password: config.mysqlPass,
    database: config.mysqlDatabase
});

const createUser = (insertValues) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                connection.query('INSERT INTO User SET ?', insertValues, (error, result) => {
                    if (error) {
                        console.error(`SQL error ${error}`)
                    } else if (result.affectedRows === 1) {
                        resolve(`Add Success! User_id: ${result.insertId}`)
                    }
                })
                connection.release();
            }
        })
    })
}

const getUser = () => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                reject(connectionError);
            } else {
                connection.query(
                    `SELECT * FROM User`, (error, result) => {
                        if (error) {
                            console.error(`SQL error ${error}`);
                        } else {
                            resolve(result);
                        }
                        connection.release();
                    }
                )
            }
        })
    })
}

const getUserLogin = (insertValues) =>{
    return new Promise((resolve,reject)=>{
        connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
            if (connectionError) {
                reject(connectionError); // 若連線有問題回傳錯誤
            }else{
                connection.query('SELECT * FROM User WHERE user_mail = ?',insertValues.user_mail,(error,result)=>{
                    if (error) {
                        console.error('SQL error: ', error);
                        reject(error); // 寫入資料庫有問題時回傳錯誤
                    } else if (Object.keys(result).length === 0) {
                        //resolve('This email is not registered!');
                        reject(new AppError.LoginError1());
                    } else {
                        const dbHashPassword = result[0].user_password;
                        const userPassword = insertValues.user_password;

                        bcrypt.compare(userPassword,dbHashPassword).then((res)=>{
                            if(res){
                                //produce JWT
                                const payload = {
                                    user_id: result[0].user_id,
                                    user_name: result[0].user_name,
                                    user_mail: result[0].user_mail
                                }
                                const token = jwt.sign({ payload, exp: Math.floor(Date.now() / 1000) + (60 * 60) },'my_secret_key');
                                //resolve('Login success!');
                                resolve(Object.assign({ code: 200 }, { message: 'Login success!',token}))
                            }else{
                                //resolve('Email or password is incorrect');
                                reject(new AppError.LoginError2());
                            }
                        })
                    }
                    connection.release();
                })
            }
        })
    })
}

const modifyUser = (insertValues, userId) => {
    return new Promise((resolve,reject)=>{
        connectionPool.getConnection((connectionError,connection)=>{
            if(connectionError){
                reject(connectionError);
            }else{
                connection.query('UPDATE User SET ? WHERE user_id = ?',[insertValues,userId],(error,result)=>{
                    if(error){
                        console.error(`SQL error: ${error}`);
                        reject(error);
                    }else if(result.affectedRows === 0){
                        resolve('Please confirm Id');
                    }else if(result.message.match('Changed: 1')){
                        resolve('Modify Success');
                    }else{
                        resolve('No change');
                    }
                    connection.release();
                })
            }
        })
    })
}

const deleteUser = (userId) => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
            if (connectionError) {
                reject(connectionError); // 若連線有問題回傳錯誤
            } else { // User資料表刪除指定id一筆資料
                connection.query('DELETE FROM User WHERE user_id = ?', userId, (error, result) => {
                    if (error) {
                        console.error('SQL error: ', error);// 資料庫存取有問題時回傳錯誤
                        reject(error);
                    } else if (result.affectedRows === 1) {
                        resolve('Delete Success!');
                    } else {
                        resolve('Delete Fail!');
                    }
                    connection.release();
                });
            }
        });
    });
};

export default {
    createUser,
    getUser,
    modifyUser,
    deleteUser,
    getUserLogin
}