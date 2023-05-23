// @desc Auth user/ set token
// route POST /api/users/auth
// access Public
import asyncHandler from 'express-async-handler'


const authUser = asyncHandler(async (req, res) => {

    // res.status(401);
    // throw new Error('Some went wrong from the client side');

    res.status(200).json({ message : 'User Authenticated'});
});

const authUser = asyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error('Some went wrong from the client side');

  res.status(200).json({ message: "User Authenticated" });
});

export { authUser };