import express from 'express';
const router = expressRouter();
import { authUser } from '../controllers/userController'

router.post('/auth', authUser)

export default router;