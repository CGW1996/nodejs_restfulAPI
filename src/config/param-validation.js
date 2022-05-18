import Joi from 'joi';

const createArticle = (req, res, next) =>{
    const schema = Joi.object({
        user_id: Joi.number().required(), // 數字＋必填
        article_title: Joi.string().required(), // 字串＋必填
        article_tag: Joi.string().required(), // 字串＋必填
        article_content: Joi.string().min(20).required() // 文章長度至少20字
    });
    validateRequest(req, next, schema);
}

const createUser = (req, res, next) => {
    const schema = Joi.object({
        user_name: Joi.string().required(), // 字串＋必填
        user_mail: Joi.string().email().trim().required(), // 限定email格式並移除多餘空白
        user_password: Joi.string().regex(/[a-zA-Z0-9]{6,30}$/).required() // 最小長度6最大30，只允許英文大小寫和數字
    });
    validateRequest(req, next, schema);
}

const validateRequest = (req, next, schema) => {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}

export default{
    createArticle,
    createUser
}