const {addUser} = require('../services/userService.js');


const addUserController = async(req,res)=>{
  try{
    const {userName,email,password,isAdmin} = req.body;
    const user = await addUser(userName,email,password,isAdmin);
    res.status(200).json(user);
  }
  catch(error){
    res.status(500).json(error);
  }
};

module.exports = {
  addUserController,
};