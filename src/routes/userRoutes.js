import {Router} from 'express'
import { followUser, getAllUsers, getUserPosts } from "../controllers/userControllers.js";
import { followSchema } from '../schema/userSchema.js';
import { validateSchema } from '../middlewares/validateSchema.js';


const userRoutes = Router()


userRoutes.get("/users", getAllUsers)

userRoutes.get("/users/:id", getUserPosts)
userRoutes.post("/follow", validateSchema(followSchema), followUser)

export default userRoutes

