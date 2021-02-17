import {Request, Response} from "express"
import PostScheme from "../../../../models/Post"

export default async (req: Request, res: Response) => {
    try {
        const {title, nickname, content} = req.body;
        PostScheme.create({
            title,
            nickname,
            content,
        }).then((newPost) =>
            res.status(200).json({
                newPost,
                message: "create post success",
            })
        )
    } catch (error) {
        res.status(500).json({
            message: "create post fail",
            error,
        })
    }
}
