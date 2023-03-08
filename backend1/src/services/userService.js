const db =  require('../database/models/index.js');

const getCartDetails = async(userId)=>{
    const foundUser = await db.User.findOne({
        where:{
            id:userId
        }
    })
    const details = [];
     await foundUser.cartDetails.reduce(async(products,productId)=>{
        const product = await db.Product.findOne({
            where:{
                id:productId
            }
        })
        return details.push(product.name);
    },details)
    
    return details;
};


module.exports = {
    getCartDetails,
}