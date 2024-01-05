class ClientError extends Error {
  constructor(httpCode, err){
    super(err);

    this.httpCode = httpCode;
  }

}

class ServerError extends Error {
  constructor(err){
    super(err);
  }
}


module.exports = {ClientError, ServerError}