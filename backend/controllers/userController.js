// @desc Auth user/ set token
// route POST /api/users/auth
// access Public
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


const authUser = asyncHandler(async (req, res) => {

    // res.status(401);
    // throw new Error('Some went wrong from the client side');

    res.status(200).json({ message : 'User Authenticated'});
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
    }

    res.status(200).json({ message: "User Registered" });
});

// @desc logout User
// route POST /api/users/logout
// access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Logged Out" });
});


// @desc Get User profile
// route Get /api/users/profile
// access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get User Profile" });
});

// @desc upadate User profile
// route PUT /api/users/update
// access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile Updated" });
});

export { 
    authUser , 
    registerUser ,
    logoutUser ,
    getUserProfile,
    updateUserProfile
};

