import { asyncHandler } from "../../shared/utils/asyncHandler.util.js";
import { successResponse } from "../../shared/utils/response.util.js";
import userService from "./user.service.js";

class UserController {
  createUser = asyncHandler(async (req, res) => {
    const user = await userService.SignUp(req.body);
    successResponse(res, user, "success", 201);
  });
}

export default new UserController();
