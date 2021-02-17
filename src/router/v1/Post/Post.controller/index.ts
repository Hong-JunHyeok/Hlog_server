import { Router } from "express"

import createPost from "./createPost"
import removePosts from "./removePosts"
import removePost from "./removePost"
import updatePost from "./updatePost"
import getPost from "./getPost"
import getPosts from "./getPosts"

const router = Router()

router.post("/", createPost)

//아래의 라우터는 관리자 계정이 생길때 사용 자제하길 바람~
router.delete("/", removePosts)

router.delete("/:idx", removePost)
router.patch("/", updatePost)
router.get("/:idx", getPost)
router.get("/", getPosts)

export default router
