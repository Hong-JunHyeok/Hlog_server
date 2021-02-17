import { Request, Response } from "express"

export default async (req: Request, res: Response) => {
    res.json({
        message: "Join Connect",
    })
}
