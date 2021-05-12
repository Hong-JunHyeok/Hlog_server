import { Router } from "express";
import login from "./auth.ctrl/login";
import join from "./auth.ctrl/join";

const router = Router();

router.post("/login", login);
router.post("/join", join);

export default router;
