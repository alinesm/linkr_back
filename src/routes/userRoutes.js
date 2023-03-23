import {Router} from 'express'
import { findFollowRelation, followUser, getAllUsers, getUserPosts, unfollowUser } from "../controllers/userControllers.js";
import { followSchema } from '../schema/userSchema.js';
import { validateSchema } from '../middlewares/validateSchema.js';


const userRoutes = Router()


userRoutes.get("/users", getAllUsers)

userRoutes.get("/users/:id", getUserPosts)
userRoutes.post("/follow", validateSchema(followSchema), followUser)
userRoutes.delete("/unfollow",validateSchema(followSchema), unfollowUser)
userRoutes.get("/find_follow", validateSchema(followSchema), findFollowRelation)

export default userRoutes

