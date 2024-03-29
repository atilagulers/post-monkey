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
      username,
      email,
      password,
      birthday,
      avatar,
      posts,
      friends,
      friendRequests,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHashed = await bcrypt.hash(password, salt);
    const createdUser = await User.create({
      username,
      email,
      password: passwordHashed,
      birthday,
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
    const {usernameOrEmail, password} = req.body;

    const user = await User.findOne({
      $or: [
        {email: usernameOrEmail.toLowerCase()},
        {username: usernameOrEmail.toLowerCase()},
      ],
    });

    if (!user) {
      throw new UnauthenticatedError('Invalid Credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthenticatedError('Invalid Credentials');
    }
    const expiresIn = '30d';
    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
      expiresIn,
    });
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    //res.cookie('token', token, {
    //  maxAge: expiresIn,
    //  httpOnly: true,
    //  secure: true,
    //  sameSite: 'strict',
    //});

    res.status(httpStatus.OK).json({token, user: userWithoutPassword});

    //res.status(httpStatus.OK).json({token, user: userWithoutPassword});
  } catch (error) {
    res.status(httpStatus.UNAUTHORIZED).json({error: error.message});
  }
};
