import CustomError from '../errors/custom.js';
import httpStatus from 'http-status';

const errorHandler = (err, req, res, next) => {
  if (err.name === 'MongoServerError') {
    if (err.code === 11000) {
      let conflictField = '';

      if (err.keyValue.hasOwnProperty('username')) {
        conflictField = 'username';
      } else if (err.keyValue.hasOwnProperty('email')) {
        conflictField = 'email';
      }

      return res.status(httpStatus.CONFLICT).json({
        error: 'CONFLICT',
        conflictField,
        message: `${conflictField} already exists`,
      });
    }
  }

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({msg: err.message});
  }

  return res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .json({msg: 'INTERNAL SERVER ERROR'});
};

export default errorHandler;
