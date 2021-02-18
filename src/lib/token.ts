import jwt, { SignOptions } from "jsonwebtoken"
import { SECRET_KEY } from "../config/secretKeyConfig"
import { UserType } from "../types/UserType"

export const createToken = (userData: any) => {
    const { email, password } = userData
    const payload = {
        email,
        password,
    }
    const options: SignOptions = {
        expiresIn: "30d",
    }

    return jwt.sign(payload, SECRET_KEY, options)
}
