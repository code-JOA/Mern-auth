// @desc Auth user/ set token
// route POST /api/users/auth
// access Public
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js'


const authUser = asyncHandler(async (req, res) => {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (user  && (await User.matchPassword(password))) {
        generateToken(res, user._id);
        res.status(201).json({
        _id: user._id,
        user: user.name,
        email: user.email,
      });
      } else {
        res.status(400);
        throw newError("Invalid email or password");
        }



    // res.status(401);
    // throw new Error('Some went wrong from the client side');

    // res.status(200).json({ message : 'User Authenticated'});

});

// @desc Auth user/ register users
// route POST /api/users/
// access Public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    // console.log(name, email, password);
    const userExists = await User.findOne({email});

    if (userExists) {
      res.status(400);
      throw new Error('user already exists');
    }

    const user = await User.create({
      name,
      email,
      password
    });

    if (user) {
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        user: user.name,
        email: user.email
      });
    } else{
      res.status(400);
      throw newError('Invalid user data');
    }

    // res.status(200).json({ message: "User Registered" });
});

// @desc logout User
// route POST /api/users/logout
// access Public
const logoutUser = asyncHandler(async (req, res) => {

  res.cookie('jwt', '', {
    httpOnly: true,
    expires: newDate(0),
  })

  res.status(200).json({ message: "User Logged Out" });
});


// @desc Get User profile
// route Get /api/users/profile
// access Private
const getUserProfile = asyncHandler(async (req, res) => {

  const user = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email
  } 

  res.status(200).json(user);
});

// @desc upadate User profile
// route PUT /api/users/update
// access Private
const updateUserProfile = asyncHandler(async (req, res) => {

  const User = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;

    }

    const updatedUser = await user.save();

    res.status(200).json();
  }else{
    res.status(404);
    throw new Error('User Not Found')

  }


  // res.status(200).json({ message: "User Profile Updated" });
});

export { 
    authUser , 
    registerUser ,
    logoutUser ,
    getUserProfile,
    updateUserProfile
};

