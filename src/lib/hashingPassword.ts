import crypto from "crypto"
import { SECRET_KEY } from "../config/secretKeyConfig"

export default function hashingPassword(password: string): string {
    const encrypt = crypto.createHmac("sha256", SECRET_KEY).update(password).digest("hex")

    return encrypt
}
