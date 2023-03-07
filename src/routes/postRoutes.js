import { Router } from "express";
import { likePost } from "../controllers/postControllers.js";

const postsRouter = Router()

postsRouter.put("/like/:id", likePost) // depois passar essa funcionalidade para dentro do controller de edit post (eu acho)

export default postsRouter