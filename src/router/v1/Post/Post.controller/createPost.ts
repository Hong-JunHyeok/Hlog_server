import { Request, Response } from "express"
import PostScheme from "../../../../models/Post"
import getPosts from "./getPosts"

export default async (req: Request, res: Response) => {
    const { title, nickname, content } = req.body
    try {
        const postScheme = new PostScheme({
            title,
            nickname,
            content,
        })
        const newPost = await postScheme.save()
        res.status(200).json({
            newPost,
            message: "create post success",
        })
    } catch (error) {
        res.status(500).json({
            message: "create post fail",
            error,
        })
    }
}
