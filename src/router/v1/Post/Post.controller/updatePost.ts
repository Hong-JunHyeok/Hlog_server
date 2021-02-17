import { Request, Response } from "express"
import PostScheme from "../../../../models/Post"

export default async (req: Request, res: Response) => {
    try {
        const { idx } = req.params
        const updateObject = req.body

        PostScheme.updateOne({ _id: idx }, updateObject).then((response) => {
            res.json({
                message: "update post success",
            })
        })
    } catch (error) {
        res.json({
            message: "update post fail",
        })
    }
}
