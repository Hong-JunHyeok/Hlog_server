import express, { Router } from "express"
import post from "./Post.controller/index"

const router = Router()

router.use("/post", post)

export default router
