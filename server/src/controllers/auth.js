import User from '../models/User.js';
import httpStatus from 'http-status';
import UnauthenticatedError from '../errors/unauthenticated.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/**
 * Handles user registration.
 * @POST /auth/register
 */
export const register = async (req, res, next) => {
  try {
    const {
      fullName,
      username,
      email,
      password,
      avatar,
      posts,
      friends,
      friendRequests,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHashed = await bcrypt.hash(password, salt);
    const createdUser = await User.create({
      fullName,
      username,
      email,
      password: passwordHashed,
      avatar,
      posts,
      friends,
      friendRequests,
    });

    res.status(httpStatus.CREATED).json(createdUser);
  } catch (error) {
    next(error);
  }
};

/**
 * Handles user login.
 * @POST /auth/login
 */
export const login = async (req, res) => {
  try {
    const {emailOrUsername, password} = req.body;
    const user = await User.findOne({
      $or: [{email: emailOrUsername}, {username: emailOrUsername}],
    });

    if (!user) {
      throw new UnauthenticatedError('Invalid Credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthenticatedError('Invalid Credentials');
    }

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.status(httpStatus.OK).json({token, user: userWithoutPassword});
  } catch (error) {
    res.status(httpStatus.UNAUTHORIZED).json({error: error.message});
  }
};
