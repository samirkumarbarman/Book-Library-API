const errorHandeler = (req, res, next, error) => {
    const statusCode = req.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({message : error.message || "Internal server error"});
};

export default errorHandeler;