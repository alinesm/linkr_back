import { Router } from "express";
import { signUp } from "../controllers/userAccessControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { SignUpSchema } from "../schema/userAccessSchema.js";
const userAccessRouter = Router()

userAccessRouter.post("/sign-up", validateSchema(SignUpSchema), signUp) 

export default userAccessRouter