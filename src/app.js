import express from "express";
import userRoute from "./modules/user/user.routes.js";
import {
  errorHandler,
  notFound,
} from "./shared/middlewares/error.middleware.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
app.use("/api/v1/auth", userRoute);

// 404 handler
app.use(notFound);

// Global error handler
app.use(errorHandler);
export { app };
