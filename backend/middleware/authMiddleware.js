const jwt = require('jsonwebtoken');
const User=require('../models/userModel');
const asyncHandler = require("express-async-handler");

const protect = async (req,res,next) =>{
    const token = req.headers.authorization.split(' ')[1];
    const hasBearer = req.headers.authorization && req.headers.authorization.startsWith('Bearer');
    if(hasBearer){
        try{
            const decode = jwt.verify(token,'secret');
            req.user = await User.findById(decode.id).select('-password');

            next();
        }catch(error){
            console.log(error);
            res.status(401);
            throw new Error('Not authorized, token failed')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized no token');
    }
    
}

const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next()
    } else {
      res.status(401)
      throw new Error('Not authorized as an admin')
    }
  }

module.exports={protect,admin};