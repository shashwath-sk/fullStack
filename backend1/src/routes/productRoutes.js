const productRouter = require('express').Router();
const {getProductController,addProductController,addProductToCartController} = require('../controllers/productController');
// const userAuth =require('../middleware/userAuth');
// const userAdmin = require('../middleware/userAdmin');

productRouter.get('/',getProductController);
productRouter.post('/add',addProductController);
productRouter.post('/cart/:id',addProductToCartController);


module.exports = productRouter;