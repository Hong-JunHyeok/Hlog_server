import { Router } from "express"
import login from "./Login.controller/Login"
import join from "./Join.controller/Join"

const router = Router()

router.use("/login", login)
router.use("/join", join)

export default router
