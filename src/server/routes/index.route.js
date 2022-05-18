import express from 'express';
import mysql from 'mysql'
import Connection from 'mysql/lib/Connection';
import config from "../../config/config";
import article from './article.route';
import user from './user.route';

const router = express.Router();

/* GET localhost:[port]/api page. */
router.get('/', (req, res) => {
    res.send(`此路徑是: localhost:${config.port}/api`);
});

router.get('/sqlTest', (req, res) => {
    const connectionPool = mysql.createPool({
        connectionLimit: 10,
        host: config.mysqlHost,
        user: config.mysqlUserName,
        password: config.mysqlPass,
        database: config.mysqlDatabase
    });
    connectionPool.getConnection((err, connection) => {
        if (err) {
            res.send(err);
            console.log('connection fail!');
        } else {
            res.send('connection success!');
            console.log(connection);
        }
    })
})

router.use('/article', article);
router.use('/user', user);
export default router;