import express from 'express';
const router = express.Router();
import { 
    authUser,
    registerUser ,
    logoutUser ,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController.js';

router.post('/', authUser)
router.post("/auth", authUser);
router.post("/logout", authUser);


export default router;