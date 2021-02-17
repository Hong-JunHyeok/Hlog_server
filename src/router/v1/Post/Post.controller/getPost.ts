import { Request, Response } from "express"
import PostScheme from "../../../../models/Post"

export default async (req: Request, res: Response) => {
    const { idx } = req.params
    try {
        PostScheme.findOne({ _id: idx }).then((response) =>
            res.status(200).json({
                message: "get post success",
                data: response,
            })
        )
    } catch (error) {
        res.status(500).json({
            message: "get post error",
        })
    }
}
