import User from '../models/User.js';
import httpStatus from 'http-status';

//* Register User
export const register = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    // hashes password in User Schema
    const createdUser = await User.create({
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    res.status(httpStatus.CREATED).json(createdUser);
  } catch (error) {
    next(error);
  }
};
