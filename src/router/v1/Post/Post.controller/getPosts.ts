import { Request, Response } from "express"
import PostScheme from "../../../../models/Post"

export default async (req: Request, res: Response) => {
    try {
        const posts = await PostScheme.find()
        res.json({
            message: "get posts success",
            posts,
        })
    } catch (error) {
        res.status(500).json({
            message: "get posts failed",
        })
    }
}
