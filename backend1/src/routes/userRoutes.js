const express  =  require('express');
const {getCartDetailsController} = require('../controllers/userController.js');
const userAuth = require('../middleware/userAuth');
const userRouter = express.Router();


userRouter.get('/cart',userAuth,getCartDetailsController);

module.exports  = userRouter;