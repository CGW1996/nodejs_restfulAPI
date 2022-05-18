import express from "express";
import userCtrl from '../controllers/user.controller'
import paramValidation from "../../config/param-validation";

const router = express.Router();

router.route('/')
.post(paramValidation.createUser, userCtrl.userPost)
.get(userCtrl.userGet);

router.route('/login').post(userCtrl.userLogin);

router.route('/:user_id')
.put(userCtrl.userModify)
.delete(userCtrl.userDelete)
export default router;