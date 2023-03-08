const {getCartDetails} = require('../services/userService.js');

const getCartDetailsController = async(req, res)=>{
    try{
        const userId = req.userId.id;
        console.log(userId)
        const cartDetails = await getCartDetails(userId);
        res.status(200).json(cartDetails);
    }
    catch(error){
        res.status(500).json(error);
    }
}


module.exports = {
    getCartDetailsController,
}