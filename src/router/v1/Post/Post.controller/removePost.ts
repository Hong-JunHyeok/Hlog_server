import { Request, Response } from "express"
import PostScheme from "../../../../models/Post"

export default async (req: Request, res: Response) => {
    try {
        const { idx } = req.body
        PostScheme.remove()
    } catch (error) {
        res.json({
            message: "remove post fail",
        })
    }
}
