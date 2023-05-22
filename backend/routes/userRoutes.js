import express from 'express';
const router = expressRouter();
import { authUser } from './controller/auth'

router.post('/auth', authUser)

export default router;