const {NotFoundError} =  require('../../error');
const makeRequest = require('../utils/makeRequest');

const userAuth = async(req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    if(!token)
    {
        throw new NotFoundError('unauthorized access is restricted');
    }
    const userId = await makeRequest({ url: '/api/validate', method: "POST" },{},token);
    if(!userId){
       throw new NotFoundError('unauthorized access is restricted');
    }
    req.userId = userId;
    next();
}


module.exports = userAuth;