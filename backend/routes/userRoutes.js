import express from 'express';
const router = express.Router();
import { 
    authUser,
    registerUser ,
    logoutUser ,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

//  register users
router.post('/', registerUser)
//  authorise users
router.post("/auth", authUser);
//  logOut users
router.post("/logout", logoutUser);

router.route("/profile").get(protect,getUserProfile).put(updateUserProfile);


export default router;