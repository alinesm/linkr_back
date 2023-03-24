import { Router } from "express";
import { deletePost, getHashtags, getPostById, likePost, newPost, getAllPosts, getPostComments, CommentPost } from "../controllers/postControllers.js";
import { userValidation } from "../middlewares/userValidation.js";

const postsRouter = Router()

postsRouter.get("/timeline", getAllPosts)

postsRouter.get("/comments/:id", getPostComments)

postsRouter.post("/posts/new", userValidation, newPost)

postsRouter.delete("/posts/:id", userValidation, deletePost)

postsRouter.get("/posts/:id",getPostById)

postsRouter.get("/postsHashtags/:id", getHashtags)

postsRouter.post("/like/:postId", userValidation, likePost)

postsRouter.post("/comments/:id", userValidation, CommentPost)

export default postsRouter