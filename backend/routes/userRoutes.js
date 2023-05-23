import express from 'express';
const router = express.Router();
import { 
    authUser,
    registerUser ,
    logoutUser ,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController.js';

router.post('/auth', authUser)
router.post("/auth", authUser);
router.post("/logout", User);


export default router;