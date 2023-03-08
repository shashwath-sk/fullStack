const db = require('../database/models/index');
const {NotFoundError} =  require('../../error');

const userAdmin = async(req,res,next)=>{
    
    const userId = req.userId;
    const foundUser = await db.User.findOne({
        where:{
            id: userId
        }
    })
    console.log("sddssd",foundUser.dataValues);
    if(!foundUser.dataValues.isAdmin){
       throw new NotFoundError('unauthorized access is restricted');
    }
    next();
}


module.exports = userAdmin;