import { json } from "body-parser"
import { Request, Response } from "express"
import UserScheme from "../../../../models/User"

export default async (req: Request, res: Response) => {
    const { email, password, nickname, name, age, intro } = req.body
    const payload = {
        email,
        password,
        nickname,
        name,
        age,
        intro,
    }
    try {
        UserScheme.create(payload).then((newUser) => {
            res.status(200).json({
                newUser,
                message: "회원가입에 성공했습니다!",
            })
        })
    } catch (error) {
        res.status(500).json({
            message: "server 오류입니다.",
        })
    }
}
