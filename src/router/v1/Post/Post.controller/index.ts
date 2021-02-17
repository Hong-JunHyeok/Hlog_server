import { Router } from "express"

import createPost from "./createPost"
import removePost from "./removePost"
import updatePost from "./updatePost"
import getPost from "./getPost"
import getPosts from "./getPosts"

const router = Router()

router.use("/createPost", createPost)
router.use("/removePost", removePost)
router.use("/updatePost", updatePost)
router.use("/getPost", getPost)
router.use("/getPosts", getPosts)

export default router
