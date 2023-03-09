import { Router } from "express";
import { logOut, signIn, signUp } from "../controllers/userAccessControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { SignInSchema, SignUpSchema } from "../schema/userAccessSchema.js";
const userAccessRouter = Router()

userAccessRouter.post("/sign-up", validateSchema(SignUpSchema), signUp) 
userAccessRouter.post("/sign-in",validateSchema(SignInSchema), signIn)
userAccessRouter.delete("/logout/:token", logOut)

export default userAccessRouter