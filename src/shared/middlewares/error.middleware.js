import logger from "../../config/logger.config.js";
import { errorResponse } from "../utils/response.util.js";

export const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // Log error
  logger.error({
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
  });
  // Development error
  if (process.env.NODE_ENV === "development") {
    return res.status(err.statusCode).json({
      success: false,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  // Production error
  if (err.isOperational) {
    errorResponse(res, err.message, err.statusCode);
  } else {
    // Programming or unknown error
    console.error("ERROR 💥", err);
    errorResponse(res, "Something went wrong!", 500);
  }
};

export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
