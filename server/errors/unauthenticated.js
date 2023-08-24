import httpStatus from 'http-status';
import CustomError from './custom.js';

class Unauthenticated extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = httpStatus.UNAUTHORIZED;
  }
}

export default Unauthenticated;
