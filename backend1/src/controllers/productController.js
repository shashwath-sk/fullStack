const {getProducts,addProduct,addProductToCard}  =  require('../services/productService');
const {NotFoundError} = require('../../error');

const getProductController = async(req,res)=>{
    try{
        const products = await getProducts();
        res.status(200).json(products);
    }
    catch(error){
            res.status(404).json(new NotFoundError(error.message));
    }
}


const addProductController = async(req,res)=>{
    try{
        const {name,description,price} = req.body;
        const products = await addProduct(name, description, price);
        console.log(products);
        res.status(200).json(products);
    }
    catch(error){
            res.status(404).json(new NotFoundError(error.message));
    }
}

const addProductToCartController = async(req,res)=>{
    try{
        const userId = req.userId;
        const {id} = req.params;
        const products = await addProductToCard(userId,id);
        console.log("mc",products);
        res.status(200).json(products);
    }
    catch(error){
            res.status(404).json(new NotFoundError(error.message));
    }
}

module.exports = {
    getProductController,
    addProductController,
    addProductToCartController
}