class appError extends Error {
	constructor(statusCode, status, message) {
		super();
		this.statusCode = statusCode;
		this.status = status;
		this.message = message;
	}
	//   sendErrorMessage()
}

module.exports = appError;
