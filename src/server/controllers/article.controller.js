// article.controller.js
import articleModule from '../modules/article.module';
import moment from 'moment';
/* Article  POST 新增 */
const articlePost = (req, res) => {
    // 取得新增參數
    const insertValues = req.body;
    insertValues.article_created_time = moment().format();
    articleModule.createArticle(insertValues).then((result) => {
        res.send(result); // 成功回傳result結果
    }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

const articleGet = (req, res) => {
    articleModule.selectArticle().then((result) => {
        res.send(result);
    }).catch((err) => { return res.send(err); });
}

const articlePersonalGet = (req,res) =>{
    articleModule.selectPersonalArticle(req.token).then((result)=>{
        res.send(result);
    }).catch((err)=>{return res.status(401).send(err)});
}

const articlePut = (req, res) => {
    const articleId = req.params.article_id;
    const insertValues = req.body;
    articleModule.modifyArticle(insertValues, articleId).then((result) => {
        res.send(result);
    }).catch((err) => { return res.send(err); });
}

const articleDelete = (req,res)=>{
    const article_id = req.params.article_id;
    articleModule.deleteArticle(article_id).then((result)=>{
        res.send(result);
    }).catch((err)=>{return res.send(err)})
}
export default {
    articlePost,
    articleGet,
    articlePut,
    articleDelete,
    articlePersonalGet
};