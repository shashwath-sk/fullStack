const {loginService,validateToken}  = require('../services/auth.service');

const loginController = async(req,res)=>{
  try{
    
    const {email,password} = req.body;
    const {token} = await loginService(email,password);
    res.status(200).json(token);
  }
  catch(error){
    console.log('error');
    res.status(500).json(error);
  }
};

const validateTokenController =async(req, res) =>{
  try {
    const token = req.headers.authorization.split(' ')[1];
    const validatedData = await validateToken(token);
    res.status(200).json(validatedData);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  loginController,
  validateTokenController
};