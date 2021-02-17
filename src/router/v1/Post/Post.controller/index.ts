import { Router } from "express"

import createPost from "./createPost"
import removePost from "./removePost"
import updatePost from "./updatePost"
import getPost from "./getPost"
import getPosts from "./getPosts"

const router = Router()

router.post("/createPost", createPost)
router.delete("/removePost", removePost)
router.patch("/updatePost", updatePost)
router.get("/getPost/:idx", getPost)
router.get("/getPosts", getPosts)

export default router
