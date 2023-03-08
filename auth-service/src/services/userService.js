const db = require('../models');
const bcrypt = require('bcrypt');


const addUser = async(userName,email,password,isAdmin)=>{
  const hashedPassword =  await bcrypt.hash(password,10);
  isAdmin = isAdmin!==undefined? isAdmin:false;
  const user = await db.User.create({
    userName,
    email,
    password:hashedPassword,
    isAdmin
  });
  delete user.dataValues.password;
  return user;
};



module.exports = {
  addUser,
};