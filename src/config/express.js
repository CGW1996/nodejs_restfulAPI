/* express.js */
import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import index from '../server/routes/index.route';
import cors from 'cors';
import morgan from 'morgan'
import AppError from '../server/helper/AppError';
import httpStatus from "http-status";
import expressValidation from 'express-validation'
import axios from 'axios';
import { createClient } from 'redis';

const client = createClient();
const defaultExpirationTime = 3600;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
/* GET home page. */
app.get('/', (req, res) => {
    res.send(`server started on port http:127.0.0.1:${config.port} (${config.env})`);
});

app.get('/test', async (req, res) => {
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
    const value = await client.get('photos');
    await client.quit();
    res.json(JSON.parse(value));
})

app.get('/photo', async (req, res) => {
    const albumId = req.query.albumId;
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
    var photos = await client.get(`photos?albumId=${albumId}`);

    if (photos != null) {
        console.log('Cache Hit');
        await client.quit();
        res.json(JSON.parse(photos));
    } else {
        console.log('Cache Miss');
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/photos", { params: { albumId } }
        )
        await client.setEx(`photos?albumId=${albumId}`, defaultExpirationTime, JSON.stringify(data));
        await client.quit();
        res.json(data);
    }

    // await client.get('photos', async (error,photos)=>{
    //     console.log('Cache');
    //     if(error) console.log(error);
    //     if(photos != null){
    //         console.log('Cache Hit');
    //         //await client.quit();
    //         //res.json(JSON.parse(photos));
    //     }else{
    //         console.log('Cache Miss');
    //         // const { data } = await axios.get(
    //         //     "https://jsonplaceholder.typicode.com/photos", { params: { albumId } }
    //         // )
    //         // await client.setEx('photos', defaultExpirationTime, JSON.stringify(data));
    //         // await client.quit();
    //         // res.json(data);
    //     }
    // })
})

app.get('/fnPhoto',async (req,res)=>{
    const albumId = req.query.albumId;
    const x = await getOrSetCache(`photos?albumId=${albumId}`,async ()=>{
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/photos", { params: { albumId } }
        )
        console.log(data);
        return data;
    })
    res.json(x);
})

const getOrSetCache = (key, cb) => {
    return new Promise(async (resolve, reject) => {
        await client.connect();
        var data = await client.get(key);
            if (data != null) {
                console.log('Cache Hit');
                await client.quit();
                resolve(JSON.parse(data));
            }else{
                console.log('Cache Miss');
                const freshData = await cb();
                client.setEx(key, defaultExpirationTime, JSON.stringify(freshData));
                await client.quit();
                resolve(freshData);
            }
    })
}

app.use('/api', index);

// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
    let errorMessage;
    let errorCode;
    let errorStatus;
    // express validation error 所有傳入參數驗證錯誤
    if (err instanceof expressValidation.ValidationError) {
        if (err.errors[0].location === 'query' || err.errors[0].location === 'body') {
            errorMessage = err.errors[0].messages;
            errorCode = 400;
            errorStatus = httpStatus.BAD_REQUEST;
        }
        const error = new APPError.APIError(errorMessage, errorStatus, true, errorCode);
        return next(error);
    }
    return next(err);
});

// error handler, send stacktrace only during development 錯誤後最後才跑這邊
app.use((err, req, res, next) => {
    res.status(err.status).json({
        message: err.isPublic ? err.message : httpStatus[err.status],
        code: err.code ? err.code : httpStatus[err.status],
        stack: config.env === 'development' ? err.stack : {}
    });
    next();
});
export default app;