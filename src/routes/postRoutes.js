import { Router } from "express";
import { getPostById } from "../controllers/postControllers.js";


const postsRouter = Router()

    postsRouter.get("/posts/:id", getPostById)

export default postsRouter