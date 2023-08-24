import CustomError from '../errors/custom.js';
import httpStatus from 'http-status';

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.name == 'MongoServerError') {
    if (err.code === 11000) {
      return res.status(httpStatus.CONFLICT).json({err});
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
