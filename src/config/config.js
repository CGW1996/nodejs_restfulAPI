/* config.js */
import Joi from 'joi';

require('dotenv').config();
const envVarSchema = Joi.object().keys({
    NODE_ENV: Joi.string().default('development').allow('development', 'production').error(err=>{
        return{
            message: `environment ${err}`
        }
    }), // 字串且預設值為development 並只允許兩種參數
    PORT: Joi.number().default(3000).error(err=>{
        return{
            message: `port ${err}`
        }
    }), // 數字且預設值為 8080
    MYSQL_PORT: Joi.number().default(3306), //數字且預設值為3306
    MYSQL_HOST: Joi.string().default('127.0.0.1'), //字串取預設值為127.0.0.1
    MYSQL_USER: Joi.string(), // 字串
    MYSQL_PASS: Joi.string(), // 字串
    MYSQL_NAME: Joi.string(), // 字串
    VERSION: Joi.string() // 字串
}).unknown().required();
const { value: envVars } = envVarSchema.validate({});
const config = {
    version: envVars.VERSION, // API版本
    env: envVars.NODE_ENV, // 開發模式(development、production)
    port: envVars.PORT, // API 阜號
    mysqlPort: envVars.MYSQL_PORT, // 連接阜號(MYSQL_PORT)
    mysqlHost: process.env.MYSQL_HOST, // 主機名稱 (MYSQL_HOST)
    mysqlUserName: process.env.MYSQL_USER, // 用戶名稱 (MYSQL_USER)
    mysqlPass: process.env.MYSQL_PASS, // 資料庫密碼(MYSQL_PASS)
    mysqlDatabase: process.env.MYSQL_DATABASE // 資料庫名稱(MYSQL_DATABASE)
};
export default config;