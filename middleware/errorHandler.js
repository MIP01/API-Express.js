const errorHandler = (err, req, res, next) => {
    const statusCode = err.status || 500;
    let message = err.message || 'Server Error';

    if (statusCode >= 400 && statusCode < 500) {
        message = `Client Error: ${err.message}`;
    }

    res.status(statusCode).json({
        status: statusCode,
        message: message,
        serverMessage: err.stack || 'An unexpected error occurred',
    });
};

// Middleware untuk menangani rute yang tidak ditemukan
const notFoundHandler = (req, res, next) => {
    const error = new Error('Resource not found');
    error.status = 404;
    next(error);
};

module.exports = { errorHandler, notFoundHandler };

