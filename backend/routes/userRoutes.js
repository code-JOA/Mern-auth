import express from 'express';
const router = express.Router();
import { 
    authUser,
    registerUser ,
    logoutUser ,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController.js';

//  register users
router.post('/', authUser)
//  authorise users
router.post("/auth", authUser);
//  logOut users
router.post("/logout", logoutUser);

router.route("/profile").get()


export default router;