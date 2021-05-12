import { Router } from "express";
import auth from "./auth";

export const router = Router();

router.use("/auth", auth);
