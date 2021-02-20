import { Request, Response } from "express"
import { createToken } from "../../../../lib/token"
import { UserType } from "../../../../types/UserType"
import UserScheme from "../../../../models/User"

export default async (req: Request, res: Response) => {
    const { email, password } = req.body
    try {
        await UserScheme.findOne({ email: email, password: password }).then((userData) => {
            if (!userData) {
                res.status(401).json({
                    message: "없는 사용자 입니다.",
                })
            } else {
                const token = createToken(userData)
                console.log(token)
                res.status(200).json({
                    userData,
                    token,
                })
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "server 오류",
            error,
        })
    }
}
