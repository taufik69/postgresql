import express from "express";
const router = express.Router();
import userController from "./user.controller.js";

router.post("/signup", userController.createUser);

export default router;
