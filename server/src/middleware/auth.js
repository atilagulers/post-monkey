import jwt from 'jsonwebtoken';
import UnauthenticatedError from '../errors/unauthenticated.js';

export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthenticatedError('Authentication invalid');
    }
    console.log('here');
    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {id: payload.userId};
  } catch (error) {
    next(error);
  }
};
