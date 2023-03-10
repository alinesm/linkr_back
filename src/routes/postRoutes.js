import { Router } from "express";
import { deletePost, getHashtags, getPostById, likePost, newPost, getAllPosts, editPost } from "../controllers/postControllers.js";
import { userValidation } from "../middlewares/userValidation.js";

const postsRouter = Router()

postsRouter.get("/timeline", getAllPosts)
postsRouter.post("/posts/new", userValidation, newPost)
postsRouter.delete("/posts/:id", userValidation, deletePost)
postsRouter.put("/posts/:id", editPost)

postsRouter.get("/posts/:id",getPostById)
postsRouter.get("/postsHashtags/:id", getHashtags)
postsRouter.post("/like/:postId", userValidation, likePost)

export default postsRouter