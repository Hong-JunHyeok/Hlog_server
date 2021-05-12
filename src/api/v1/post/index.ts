import { Router } from "express";
import createPost from "./post.ctrl/createPost";
// import deletePost from "./post.ctrl/deletePost";
// import getPost from "./post.ctrl/getPost";
// import getPosts from "./post.ctrl/getPosts";
// import modifyPost from './post.ctrl/modifyPost'

const router = Router();

router.post("/", createPost);

export default router;