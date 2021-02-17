import express, { Router } from "express"
import login from "./Login/Login"
import join from "./Join/Join"

const router = Router()

router.use("/login", login)
router.use("/join", join)

export default router
