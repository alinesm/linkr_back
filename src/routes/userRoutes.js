import {Router} from 'express'
import { getUserPosts } from "../controllers/userControllers.js";

const userRoutes = Router()

userRoutes.get("/users/:id", getUserPosts)

export default userRoutes

