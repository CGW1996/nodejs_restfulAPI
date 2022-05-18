/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n/* config.js */\n\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n\nconst envVarSchema = joi__WEBPACK_IMPORTED_MODULE_0___default().object().keys({\n  NODE_ENV: joi__WEBPACK_IMPORTED_MODULE_0___default().string().default('development').allow('development', 'production').error(err => {\n    return {\n      message: `environment ${err}`\n    };\n  }),\n  // 字串且預設值為development 並只允許兩種參數\n  PORT: joi__WEBPACK_IMPORTED_MODULE_0___default().number().default(3000).error(err => {\n    return {\n      message: `port ${err}`\n    };\n  }),\n  // 數字且預設值為 8080\n  MYSQL_PORT: joi__WEBPACK_IMPORTED_MODULE_0___default().number().default(3306),\n  //數字且預設值為3306\n  MYSQL_HOST: joi__WEBPACK_IMPORTED_MODULE_0___default().string().default('127.0.0.1'),\n  //字串取預設值為127.0.0.1\n  MYSQL_USER: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n  // 字串\n  MYSQL_PASS: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n  // 字串\n  MYSQL_NAME: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),\n  // 字串\n  VERSION: joi__WEBPACK_IMPORTED_MODULE_0___default().string() // 字串\n\n}).unknown().required();\nconst {\n  value: envVars\n} = envVarSchema.validate({});\nconst config = {\n  version: envVars.VERSION,\n  // API版本\n  env: envVars.NODE_ENV,\n  // 開發模式(development、production)\n  port: envVars.PORT,\n  // API 阜號\n  mysqlPort: envVars.MYSQL_PORT,\n  // 連接阜號(MYSQL_PORT)\n  mysqlHost: process.env.MYSQL_HOST,\n  // 主機名稱 (MYSQL_HOST)\n  mysqlUserName: process.env.MYSQL_USER,\n  // 用戶名稱 (MYSQL_USER)\n  mysqlPass: process.env.MYSQL_PASS,\n  // 資料庫密碼(MYSQL_PASS)\n  mysqlDatabase: process.env.MYSQL_DATABASE // 資料庫名稱(MYSQL_DATABASE)\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://nodejs/./src/config/config.js?");

/***/ }),

/***/ "./src/config/express.js":
/*!*******************************!*\
  !*** ./src/config/express.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./src/config/config.js\");\n/* harmony import */ var _server_routes_index_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server/routes/index.route */ \"./src/server/routes/index.route.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _server_helper_AppError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../server/helper/AppError */ \"./src/server/helper/AppError.js\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redis */ \"redis\");\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_10__);\n/* express.js */\n\n\n\n\n\n\n\n\n\n\n\nconst client = (0,redis__WEBPACK_IMPORTED_MODULE_10__.createClient)();\nconst defaultExpirationTime = 3600;\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({\n  extended: true\n}));\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(morgan__WEBPACK_IMPORTED_MODULE_5___default()('dev'));\n/* GET home page. */\n\napp.get('/', (req, res) => {\n  res.send(`server started on port http:127.0.0.1:${_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port} (${_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].env})`);\n});\napp.get('/test', async (req, res) => {\n  client.on('error', err => console.log('Redis Client Error', err));\n  await client.connect();\n  const value = await client.get('photos');\n  await client.quit();\n  res.json(JSON.parse(value));\n});\napp.get('/photo', async (req, res) => {\n  const albumId = req.query.albumId;\n  client.on('error', err => console.log('Redis Client Error', err));\n  await client.connect();\n  var photos = await client.get(`photos?albumId=${albumId}`);\n\n  if (photos != null) {\n    console.log('Cache Hit');\n    await client.quit();\n    res.json(JSON.parse(photos));\n  } else {\n    console.log('Cache Miss');\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_9___default().get(\"https://jsonplaceholder.typicode.com/photos\", {\n      params: {\n        albumId\n      }\n    });\n    await client.setEx(`photos?albumId=${albumId}`, defaultExpirationTime, JSON.stringify(data));\n    await client.quit();\n    res.json(data);\n  } // await client.get('photos', async (error,photos)=>{\n  //     console.log('Cache');\n  //     if(error) console.log(error);\n  //     if(photos != null){\n  //         console.log('Cache Hit');\n  //         //await client.quit();\n  //         //res.json(JSON.parse(photos));\n  //     }else{\n  //         console.log('Cache Miss');\n  //         // const { data } = await axios.get(\n  //         //     \"https://jsonplaceholder.typicode.com/photos\", { params: { albumId } }\n  //         // )\n  //         // await client.setEx('photos', defaultExpirationTime, JSON.stringify(data));\n  //         // await client.quit();\n  //         // res.json(data);\n  //     }\n  // })\n\n});\napp.get('/fnPhoto', async (req, res) => {\n  const albumId = req.query.albumId;\n  const x = await getOrSetCache(`photos?albumId=${albumId}`, async () => {\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_9___default().get(\"https://jsonplaceholder.typicode.com/photos\", {\n      params: {\n        albumId\n      }\n    });\n    console.log(data);\n    return data;\n  });\n  res.json(x);\n});\n\nconst getOrSetCache = (key, cb) => {\n  return new Promise(async (resolve, reject) => {\n    await client.connect();\n    var data = await client.get(key);\n\n    if (data != null) {\n      console.log('Cache Hit');\n      await client.quit();\n      resolve(JSON.parse(data));\n    } else {\n      console.log('Cache Miss');\n      const freshData = await cb();\n      client.setEx(key, defaultExpirationTime, JSON.stringify(freshData));\n      await client.quit();\n      resolve(freshData);\n    }\n  });\n};\n\napp.use('/api', _server_routes_index_route__WEBPACK_IMPORTED_MODULE_3__[\"default\"]); // if error is not an instanceOf APIError, convert it.\n\napp.use((err, req, res, next) => {\n  let errorMessage;\n  let errorCode;\n  let errorStatus; // express validation error 所有傳入參數驗證錯誤\n\n  if (err instanceof (express_validation__WEBPACK_IMPORTED_MODULE_8___default().ValidationError)) {\n    if (err.errors[0].location === 'query' || err.errors[0].location === 'body') {\n      errorMessage = err.errors[0].messages;\n      errorCode = 400;\n      errorStatus = (http_status__WEBPACK_IMPORTED_MODULE_7___default().BAD_REQUEST);\n    }\n\n    const error = new APPError.APIError(errorMessage, errorStatus, true, errorCode);\n    return next(error);\n  }\n\n  return next(err);\n}); // error handler, send stacktrace only during development 錯誤後最後才跑這邊\n\napp.use((err, req, res, next) => {\n  res.status(err.status).json({\n    message: err.isPublic ? err.message : (http_status__WEBPACK_IMPORTED_MODULE_7___default())[err.status],\n    code: err.code ? err.code : (http_status__WEBPACK_IMPORTED_MODULE_7___default())[err.status],\n    stack: _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].env === 'development' ? err.stack : {}\n  });\n  next();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://nodejs/./src/config/express.js?");

/***/ }),

/***/ "./src/config/param-validation.js":
/*!****************************************!*\
  !*** ./src/config/param-validation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst createArticle = (req, res, next) => {\n  const schema = joi__WEBPACK_IMPORTED_MODULE_0___default().object({\n    user_id: joi__WEBPACK_IMPORTED_MODULE_0___default().number().required(),\n    // 數字＋必填\n    article_title: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    // 字串＋必填\n    article_tag: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    // 字串＋必填\n    article_content: joi__WEBPACK_IMPORTED_MODULE_0___default().string().min(20).required() // 文章長度至少20字\n\n  });\n  validateRequest(req, next, schema);\n};\n\nconst createUser = (req, res, next) => {\n  const schema = joi__WEBPACK_IMPORTED_MODULE_0___default().object({\n    user_name: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    // 字串＋必填\n    user_mail: joi__WEBPACK_IMPORTED_MODULE_0___default().string().email().trim().required(),\n    // 限定email格式並移除多餘空白\n    user_password: joi__WEBPACK_IMPORTED_MODULE_0___default().string().regex(/[a-zA-Z0-9]{6,30}$/).required() // 最小長度6最大30，只允許英文大小寫和數字\n\n  });\n  validateRequest(req, next, schema);\n};\n\nconst validateRequest = (req, next, schema) => {\n  const options = {\n    abortEarly: false,\n    // include all errors\n    allowUnknown: true,\n    // ignore unknown props\n    stripUnknown: true // remove unknown props\n\n  };\n  const {\n    error,\n    value\n  } = schema.validate(req.body, options);\n\n  if (error) {\n    next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);\n  } else {\n    req.body = value;\n    next();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createArticle,\n  createUser\n});\n\n//# sourceURL=webpack://nodejs/./src/config/param-validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config */ \"./src/config/config.js\");\n/* harmony import */ var _config_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/express */ \"./src/config/express.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nif (!module.parent) {\n  // listen on port config.port\n  _config_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, () => {\n    console.log(`server started on port http://127.0.0.1:${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port} (${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env})`);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_config_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://nodejs/./src/index.js?");

/***/ }),

/***/ "./src/server/controllers/article.controller.js":
/*!******************************************************!*\
  !*** ./src/server/controllers/article.controller.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_article_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/article.module */ \"./src/server/modules/article.module.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n// article.controller.js\n\n\n/* Article  POST 新增 */\n\nconst articlePost = (req, res) => {\n  // 取得新增參數\n  const insertValues = req.body;\n  insertValues.article_created_time = moment__WEBPACK_IMPORTED_MODULE_1___default()().format();\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createArticle(insertValues).then(result => {\n    res.send(result); // 成功回傳result結果\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\n\nconst articleGet = (req, res) => {\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectArticle().then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\n\nconst articlePersonalGet = (req, res) => {\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectPersonalArticle(req.token).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.status(401).send(err);\n  });\n};\n\nconst articlePut = (req, res) => {\n  const articleId = req.params.article_id;\n  const insertValues = req.body;\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modifyArticle(insertValues, articleId).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\n\nconst articleDelete = (req, res) => {\n  const article_id = req.params.article_id;\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteArticle(article_id).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  articlePost,\n  articleGet,\n  articlePut,\n  articleDelete,\n  articlePersonalGet\n});\n\n//# sourceURL=webpack://nodejs/./src/server/controllers/article.controller.js?");

/***/ }),

/***/ "./src/server/controllers/user.controller.js":
/*!***************************************************!*\
  !*** ./src/server/controllers/user.controller.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_user_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/user.module */ \"./src/server/modules/user.module.js\");\n\n\nvar bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nconst userPost = (req, res) => {\n  const insertValue = {\n    user_name: req.body.user_name,\n    user_mail: req.body.user_mail,\n    user_password: bcrypt.hashSync(req.body.user_password, 10) // 密碼加密\n\n  };\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createUser(insertValue).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\n\nconst userGet = (req, res) => {\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getUser().then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\n\nconst userLogin = (req, res, next) => {\n  const insertValues = req.body;\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getUserLogin(insertValues).then(result => {\n    res.send(result); //}).catch((err) => { return res.send(err) });\n  }).catch(err => {\n    next(err);\n  });\n};\n\nconst userModify = (req, res) => {\n  const insertValue = req.body;\n  const userId = req.params.user_id;\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modifyUser(insertValue, userId).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\n\nconst userDelete = (req, res) => {\n  // 取得刪除id\n  const userId = req.params.user_id;\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteUser(userId).then(result => {\n    res.send(result); // 回傳刪除成功訊息\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  userPost,\n  userGet,\n  userModify,\n  userDelete,\n  userLogin\n});\n\n//# sourceURL=webpack://nodejs/./src/server/controllers/user.controller.js?");

/***/ }),

/***/ "./src/server/helper/AppError.js":
/*!***************************************!*\
  !*** ./src/server/helper/AppError.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\r\n * @extends Error\r\n */\n\nclass ExtendableError extends Error {\n  constructor(message, status, isPublic, code) {\n    super(message);\n    this.message = message;\n    this.name = this.constructor.name;\n    this.status = status;\n    this.isPublic = isPublic;\n    this.code = code;\n    this.isOperational = true;\n    Error.captureStackTrace(this, this.constructor.name);\n  }\n\n}\n/**\r\n * 信箱尚未註冊 Error\r\n * @extends ExtendableError\r\n */\n\n\nclass LoginError1 extends ExtendableError {\n  /**\r\n  * Creates an API error.\r\n  * @param {string} message - Error message.\r\n  * @param {number} status - HTTP status code of error.\r\n  * @param {boolean} isPublic - Whether the message should be visible to user or not.\r\n  */\n  constructor(message = 'This email is not registered!', status = (http_status__WEBPACK_IMPORTED_MODULE_0___default().NOT_FOUND), isPublic = true, code = 401) {\n    super(message, status, isPublic, code);\n    this.name = 'LogicError';\n  }\n\n}\n/**\r\n * 密碼錯誤 Error.\r\n * @extends ExtendableError\r\n */\n\n\nclass LoginError2 extends ExtendableError {\n  /**\r\n   * Creates an API error.\r\n   * @param {string} message - Error message.\r\n   * @param {number} status - HTTP status code of error.\r\n   * @param {boolean} isPublic - Whether the message should be visible to user or not.\r\n   */\n  constructor(message = '您輸入的密碼有誤！', status = (http_status__WEBPACK_IMPORTED_MODULE_0___default().NOT_FOUND), isPublic = true, code = 401) {\n    super(message, status, isPublic, code);\n    this.name = 'LoginError';\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  LoginError1,\n  LoginError2\n});\n\n//# sourceURL=webpack://nodejs/./src/server/helper/AppError.js?");

/***/ }),

/***/ "./src/server/modules/article.module.js":
/*!**********************************************!*\
  !*** ./src/server/modules/article.module.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redis */ \"redis\");\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst connectionPool = mysql__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n  connectionLimit: 10,\n  host: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlHost,\n  user: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlUserName,\n  password: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlPass,\n  database: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlDatabase\n});\nconst client = (0,redis__WEBPACK_IMPORTED_MODULE_4__.createClient)();\nconst defaultExpirationTime = 3600;\n\nconst createArticle = insertValues => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        connection.query('INSERT INTO Article SET ?', insertValues, (error, result) => {\n          // Article資料表寫入一筆資料\n          if (error) {\n            console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤\n\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            resolve(`新增成功！ article_id: ${result.insertId}`); // 寫入成功回傳寫入id\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\nconst selectArticle = () => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query(`SELECT * FROM Article`, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error);\n            reject(error);\n          } else {\n            resolve(result);\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\nconst selectPersonalArticle = token => {\n  return new Promise((resolve, reject) => {\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, 'my_secret_key', async (err, decoded) => {\n      if (err) {\n        reject(err);\n      } else {\n        await client.connect(); //撈取資料庫該用戶的所有文章\n\n        const userId = decoded.payload.user_id;\n        var userArticle = await client.get(`personal?userId=${userId}`);\n\n        if (userArticle != null) {\n          console.log('Cache Hit');\n          await client.quit();\n          resolve(JSON.parse(userArticle));\n        } else {\n          console.log('Cache Miss');\n          connectionPool.getConnection((connectionError, connection) => {\n            if (connectionError) {\n              reject(connectionError);\n            } else {\n              connection.query('SELECT * FROM Article WHERE user_id = ?', [userId], async (error, result) => {\n                if (error) {\n                  reject(error);\n                } else {\n                  console.log(result);\n                  await client.setEx(`personal?userId=${userId}`, defaultExpirationTime, JSON.stringify(result));\n                  await client.quit();\n                  resolve(result);\n                }\n\n                connection.release();\n              });\n            }\n          });\n        } //resolve(payload); // 驗證成功回傳 payload data\n\n      }\n    });\n  });\n};\n\nconst modifyArticle = (insertValues, articleId) => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query(`UPDATE Article SET ? WHERE article_id = ?`, [insertValues, articleId], (error, result) => {\n          if (error) {\n            console.error(`SQL error: ${error}`);\n          } else if (result.affectedRows === 0) {\n            resolve('Confirm article Id');\n          } else if (result.message.match('Changed: 1')) {\n            resolve('Data modify success');\n          } else {\n            resolve('No Change');\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\nconst deleteArticle = articleId => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query(`DELETE FROM Article WHERE article_id = ?`, articleId, (error, result) => {\n          if (error) {\n            console.error(`SQL error: ${error}`);\n          } else if (result.affectedRows === 1) {\n            resolve(`Delete Article ${articleId} Success`);\n          } else {\n            resolve(`Delete fail!`);\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createArticle,\n  selectArticle,\n  modifyArticle,\n  deleteArticle,\n  selectPersonalArticle\n});\n\n//# sourceURL=webpack://nodejs/./src/server/modules/article.module.js?");

/***/ }),

/***/ "./src/server/modules/user.module.js":
/*!*******************************************!*\
  !*** ./src/server/modules/user.module.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcryptjs_dist_bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs/dist/bcrypt */ \"bcryptjs/dist/bcrypt\");\n/* harmony import */ var bcryptjs_dist_bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs_dist_bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _helper_AppError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/AppError */ \"./src/server/helper/AppError.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst connectionPool = mysql__WEBPACK_IMPORTED_MODULE_1___default().createPool({\n  connectionLimit: 10,\n  host: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlHost,\n  user: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlUserName,\n  password: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlPass,\n  database: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mysqlDatabase\n});\n\nconst createUser = insertValues => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query('INSERT INTO User SET ?', insertValues, (error, result) => {\n          if (error) {\n            console.error(`SQL error ${error}`);\n          } else if (result.affectedRows === 1) {\n            resolve(`Add Success! User_id: ${result.insertId}`);\n          }\n        });\n        connection.release();\n      }\n    });\n  });\n};\n\nconst getUser = () => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query(`SELECT * FROM User`, (error, result) => {\n          if (error) {\n            console.error(`SQL error ${error}`);\n          } else {\n            resolve(result);\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\nconst getUserLogin = insertValues => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        connection.query('SELECT * FROM User WHERE user_mail = ?', insertValues.user_mail, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error);\n            reject(error); // 寫入資料庫有問題時回傳錯誤\n          } else if (Object.keys(result).length === 0) {\n            //resolve('This email is not registered!');\n            reject(new _helper_AppError__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LoginError1());\n          } else {\n            const dbHashPassword = result[0].user_password;\n            const userPassword = insertValues.user_password;\n            bcryptjs_dist_bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(userPassword, dbHashPassword).then(res => {\n              if (res) {\n                //produce JWT\n                const payload = {\n                  user_id: result[0].user_id,\n                  user_name: result[0].user_name,\n                  user_mail: result[0].user_mail\n                };\n                const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign({\n                  payload,\n                  exp: Math.floor(Date.now() / 1000) + 60 * 60\n                }, 'my_secret_key'); //resolve('Login success!');\n\n                resolve(Object.assign({\n                  code: 200\n                }, {\n                  message: 'Login success!',\n                  token\n                }));\n              } else {\n                //resolve('Email or password is incorrect');\n                reject(new _helper_AppError__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LoginError2());\n              }\n            });\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\nconst modifyUser = (insertValues, userId) => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        reject(connectionError);\n      } else {\n        connection.query('UPDATE User SET ? WHERE user_id = ?', [insertValues, userId], (error, result) => {\n          if (error) {\n            console.error(`SQL error: ${error}`);\n            reject(error);\n          } else if (result.affectedRows === 0) {\n            resolve('Please confirm Id');\n          } else if (result.message.match('Changed: 1')) {\n            resolve('Modify Success');\n          } else {\n            resolve('No change');\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\nconst deleteUser = userId => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        // User資料表刪除指定id一筆資料\n        connection.query('DELETE FROM User WHERE user_id = ?', userId, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error); // 資料庫存取有問題時回傳錯誤\n\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            resolve('Delete Success!');\n          } else {\n            resolve('Delete Fail!');\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createUser,\n  getUser,\n  modifyUser,\n  deleteUser,\n  getUserLogin\n});\n\n//# sourceURL=webpack://nodejs/./src/server/modules/user.module.js?");

/***/ }),

/***/ "./src/server/routes/article.route.js":
/*!********************************************!*\
  !*** ./src/server/routes/article.route.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_article_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/article.controller */ \"./src/server/controllers/article.controller.js\");\n/* harmony import */ var _config_param_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/param-validation */ \"./src/config/param-validation.js\");\n// article.route.js\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/').get(_controllers_article_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].articleGet).post(_config_param_validation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createArticle, _controllers_article_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].articlePost);\n/** 新增 Article 值組 */\n\nrouter.route('/:article_id').put(_controllers_article_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].articlePut).delete(_controllers_article_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].articleDelete);\n/** 利用 Middleware 取得 Header 中的 Rearer Token */\n\nconst ensureToken = (req, res, next) => {\n  const bearerHeader = req.headers.authorization;\n\n  if (typeof bearerHeader !== 'undefined') {\n    const bearer = bearerHeader.split(' '); // 字串切割\n\n    const bearerToken = bearer[1]; // 取得 JWT\n\n    req.token = bearerToken; // 在response中建立一個token參數\n\n    next(); // 結束 Middleware 進入 articleCtrl.articlePersonalGet\n  } else {\n    res.status(403).send(Object.assign({\n      code: 403\n    }, {\n      message: '您尚未登入！'\n    })); // Header 查無 Rearer Token\n  }\n};\n/** 取得某用戶 Article 所有值組 */\n\n\nrouter.get('/personal', ensureToken, _controllers_article_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].articlePersonalGet);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://nodejs/./src/server/routes/article.route.js?");

/***/ }),

/***/ "./src/server/routes/index.route.js":
/*!******************************************!*\
  !*** ./src/server/routes/index.route.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mysql_lib_Connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mysql/lib/Connection */ \"mysql/lib/Connection\");\n/* harmony import */ var mysql_lib_Connection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mysql_lib_Connection__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _article_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article.route */ \"./src/server/routes/article.route.js\");\n/* harmony import */ var _user_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.route */ \"./src/server/routes/user.route.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n/* GET localhost:[port]/api page. */\n\nrouter.get('/', (req, res) => {\n  res.send(`此路徑是: localhost:${_config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].port}/api`);\n});\nrouter.get('/sqlTest', (req, res) => {\n  const connectionPool = mysql__WEBPACK_IMPORTED_MODULE_1___default().createPool({\n    connectionLimit: 10,\n    host: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].mysqlHost,\n    user: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].mysqlUserName,\n    password: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].mysqlPass,\n    database: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].mysqlDatabase\n  });\n  connectionPool.getConnection((err, connection) => {\n    if (err) {\n      res.send(err);\n      console.log('connection fail!');\n    } else {\n      res.send('connection success!');\n      console.log(connection);\n    }\n  });\n});\nrouter.use('/article', _article_route__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nrouter.use('/user', _user_route__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://nodejs/./src/server/routes/index.route.js?");

/***/ }),

/***/ "./src/server/routes/user.route.js":
/*!*****************************************!*\
  !*** ./src/server/routes/user.route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./src/server/controllers/user.controller.js\");\n/* harmony import */ var _config_param_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/param-validation */ \"./src/config/param-validation.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/').post(_config_param_validation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createUser, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userPost).get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userGet);\nrouter.route('/login').post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userLogin);\nrouter.route('/:user_id').put(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userModify).delete(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userDelete);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://nodejs/./src/server/routes/user.route.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "bcryptjs/dist/bcrypt":
/*!***************************************!*\
  !*** external "bcryptjs/dist/bcrypt" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("bcryptjs/dist/bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-validation");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("http-status");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ "mysql/lib/Connection":
/*!***************************************!*\
  !*** external "mysql/lib/Connection" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("mysql/lib/Connection");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redis");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;