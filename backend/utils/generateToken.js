import jwt from 'jsonwebtoken';


const generateToken = (res, userId) => {
    const token = jwt.sign(userId, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });

    res.cookie('jwt',token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        //  expires in 30days, 24 hours, 60 min , 60 seconds , 1000 ms
        maxAge: 30 * 24 * 60 * 60 * 1000
    }) 
}

export default generateToken;