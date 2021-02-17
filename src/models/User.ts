import mongoose from "mongoose"
import validate from "validator"

const UserScheme: mongoose.Schema<
    mongoose.Document<any>,
    mongoose.Model<mongoose.Document<any>>,
    undefined
> = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value: string) {
            if (!validate.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        },
        trim: true,
    },
    password: {
        type: String,
        required: true,
        validate(value: string) {
            if (!validate.isStrongPassword(value)) {
                throw new Error("password is invalid")
            }
        },
        trim: true,
    },
    nickname: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: false,
        trim: true,
    },
    intro: {
        type: String,
        required: false,
        trim: true,
    },
    joined: {
        type: Date,
        required: true,
        default: Date.now(),
        trim: true,
    },
})

export default mongoose.model("user", UserScheme)
