import httpStatus from 'http-status';
import CustomError from './custom.js';

class BadRequestError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = httpStatus.BAD_REQUEST;
  }
}

export default BadRequestError;
