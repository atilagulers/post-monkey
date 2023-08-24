import express from 'express';
import {register, login} from '../controllers/auth.js';

const router = express.Router();

/**
 * User registration endpoint.
 */
router.post('/register', register);

/**
 * User login endpoint.
 */
router.post('/login', login);

export default router;
