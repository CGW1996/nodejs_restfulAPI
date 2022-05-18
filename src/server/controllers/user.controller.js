import userModule from "../modules/user.module";
var bcrypt = require('bcryptjs');

const userPost = (req, res) => {
    const insertValue = {
        user_name: req.body.user_name,
        user_mail: req.body.user_mail,
        user_password: bcrypt.hashSync(req.body.user_password, 10) // 密碼加密
    }
    userModule.createUser(insertValue).then((result) => {
        res.send(result);
    }).catch((err) => { return res.send(err) });
}

const userGet = (req, res) => {
    userModule.getUser().then((result) => {
        res.send(result);
    }).catch((err) => { return res.send(err) });
}

const userLogin = (req, res, next) => {
    const insertValues = req.body;
    userModule.getUserLogin(insertValues).then((result) => {
        res.send(result);
        //}).catch((err) => { return res.send(err) });
    }).catch((err) => { next(err) });
}

const userModify = (req, res) => {
    const insertValue = req.body;
    const userId = req.params.user_id;
    userModule.modifyUser(insertValue, userId).then((result) => {
        res.send(result);
    }).catch((err) => { return res.send(err) });
}

const userDelete = (req, res) => {
    // 取得刪除id
    const userId = req.params.user_id;
    userModule.deleteUser(userId).then((result) => {
        res.send(result); // 回傳刪除成功訊息
    }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};
export default {
    userPost,
    userGet,
    userModify,
    userDelete,
    userLogin
}