import Login from "./Login"
import { Router } from "express"

const router = Router()

router.post("/", Login)
