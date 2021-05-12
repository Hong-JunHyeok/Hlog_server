import { Router } from "express";
import auth from "./auth";
import post from "./post";

export const router = Router();

router.use("/auth", auth);
router.use("/post", post);
