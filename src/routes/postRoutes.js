import { Router } from "express";
import { getHashtags, getPostById, likePost } from "../controllers/postControllers.js";
import { userValidation } from "../middlewares/userValidation.js";



const postsRouter = Router()

postsRouter.get("/posts/:id",getPostById)
postsRouter.get("/postsHashtags/:id", getHashtags)
postsRouter.post("/like/:postId", userValidation, likePost)

export default postsRouter