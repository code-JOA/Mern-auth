import express from 'express';
const router = express.Router();
import { 
    authUser,
    registerUser ,
    logoutUser ,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController.js';
import { protect } from './middleware/'

//  register users
router.post('/', registerUser)
//  authorise users
router.post("/auth", authUser);
//  logOut users
router.post("/logout", logoutUser);

router.route("/profile").get(getUserProfile).put(updateUserProfile);


export default router;