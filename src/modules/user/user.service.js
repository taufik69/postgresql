import { prisma } from "../../../lib/db.js";
import { AppError } from "../../shared/utils/error.utils.js";

class UserService {
  SignUp = async (bodyData) => {
    console.log("bodyData", bodyData);
    // throw new AppError("User already exists", 400);
    return bodyData;
  };
}
export default new UserService();
