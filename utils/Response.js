class Response {
    constructor(statusCode, message = "", data = {}) {
      this.status = statusCode;
      this.message = message;
      this.data = data;
    }
  }
  
module.exports = Response;
  