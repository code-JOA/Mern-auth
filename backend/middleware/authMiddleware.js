import jwt from 'jsonwebtoken';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';


const protect = asyncHandler(async (req, res, next) => {
    let token;

    token = req.cookies.jwt;

    if (token) {
        try {
            
        } catch (error) {
            res.status(401);
            throw new Error('Not authourized, Invalid error')    
        }


    } else{
        res.status(401);
        throw new Error('Not authorized, no token');
    }
} );