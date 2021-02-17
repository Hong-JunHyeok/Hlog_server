import { Request, Response, Router } from "express"
import auth from "./Auth"
import comment from "./Comment"
import post from "./Post"

const router = Router()

router.use(auth)
router.use(comment)
router.use(post)

export default router
