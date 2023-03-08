const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {NotFoundError, HttpError} = require('../../errors');

const {getRedisClient} = require('../utils/redisUtils');

const loginService = async(email,password) => {
  const redisClient = await getRedisClient();
  const foundUser = await db.User.findOne({
    where:{
      email: email,
    }
  });
  if(!foundUser) {
    throw new NotFoundError('user not found');
  }

  const verifyUser = await bcrypt.compare(password,foundUser.password);
  console.log('dkddk',verifyUser);
  if(!verifyUser) {
    throw new Error('user not found');

  }
  const token = jwt.sign(foundUser.dataValues, process.env.SECRET, {
    algorithm: 'HS256',
    expiresIn: 60*60,
  });
  console.log(token);
  await redisClient.set(token,foundUser.id);
  return {token} ;
};

const validateToken = async(token)=>{
  const redisClient = await getRedisClient();
  const userId = await redisClient.get(token);
  if (!userId) {
    throw new HttpError(401, 'Unauthorized');
  }
  return jwt.verify(token, process.env.SECRET);
};


module.exports = {
  loginService,
  validateToken
};