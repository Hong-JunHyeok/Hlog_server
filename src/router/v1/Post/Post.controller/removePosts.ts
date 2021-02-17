import {Request, Response} from "express"
import PostScheme from "../../../../models/Post"

export default async (req: Request, res: Response) => {
    try {
        PostScheme.remove().then(() =>
            res.json({
                message: "remove post success",
            })
        )
    } catch (error) {
        res.json({
            message: "remove post fail",
        })
    }
}
