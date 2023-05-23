const notFound = ( req, res, Next ) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    Next(error);
}

const errorHandler = (req, res, next) => {
    letStatusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

// Mongodb error
    if (error.name(casterror)) {

    }
}