import {Router} from 'express'
import { getAllUsers, getUserPosts } from "../controllers/userControllers.js";


const userRoutes = Router()


userRoutes.get("/users", getAllUsers)

userRoutes.get("/users/:id", getUserPosts)
export default userRoutes

