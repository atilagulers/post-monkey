import httpStatus from 'http-status';
import CustomError from './custom.js';

class NotFound extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = httpStatus.NOT_FOUND;
  }
}
export default NotFound;
