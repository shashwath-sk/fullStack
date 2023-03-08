const express  =  require('express');
const {addUserController} = require('../controllers/user.controller.js');
const {handleErrors} = require('../middlewares/errorHandler');
const {loginController,validateTokenController} = require('../controllers/auth.controller');
const userRouter = express.Router();

userRouter.post('/',addUserController);
userRouter.post('/login',loginController);
userRouter.post('/validate',validateTokenController);
// userRouter.

userRouter.use(handleErrors);

module.exports = userRouter;
