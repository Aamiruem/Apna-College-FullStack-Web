class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.status = status;
        this.message = message;
    }
}

module.exports = ExpressError;
