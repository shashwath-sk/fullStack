// const db = require('../database/models/index');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const {NotFoundError, HttpError} = require('../../error');
// const {getRedisClient} = require('../utils/redisUtils');

// const SECRET_KEY = 'secret';

// const loginService = async(email,password) => {
//     const redisClient = await getRedisClient();
//     const foundUser = await db.User.findOne({
//         where:{
//             email: email,
//         }
//     })
//     if(!foundUser) {
//        throw new NotFoundError("user not found");
//     }

//     const verifyUser = await bcrypt.compare(password,foundUser.dataValues.password);
//     if(!verifyUser) {
//       throw new Error("user not found");

//     }
//     const token = jwt.sign(foundUser.dataValues, SECRET_KEY, {
//         algorithm: 'HS256',
//         expiresIn: 60*60,
//       });
  
//       // treating '1' as token exists
//     await redisClient.set(token,foundUser.dataValues.id);
//     return {token} ;
// }

// const validateToken = async(token)=>{
//     const redisClient = await getRedisClient();
//     const userId = await redisClient.get(token);
//     if (!userId) {
//       throw new HttpError(401, 'Unauthorized');
//     }
//     return jwt.verify(token, SECRET_KEY);
//   }


// module.exports = {
//     loginService,
//     validateToken
// }