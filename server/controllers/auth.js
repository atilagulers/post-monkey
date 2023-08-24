import User from '../models/User.js';
import httpStatus from 'http-status';
import UnauthenticatedError from '../errors/unauthenticated.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//* REGISTER USER
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

    const salt = await bcrypt.genSalt();
    const passwordHashed = await bcrypt.hash(password, salt);

    const createdUser = await User.create({
      firstName,
      lastName,
      email,
      password: passwordHashed,
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

//* LOGGING IN
export const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if (!user) {
      throw new UnauthenticatedError('Invalid Credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthenticatedError('Invalid Credentials');
    }

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
    delete user.password;
    res.status(httpStatus.OK).json({token, user});
  } catch (error) {}
};
