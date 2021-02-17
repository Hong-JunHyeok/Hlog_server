import mongoose from "mongoose"

const PostScheme = new mongoose.Schema({
    idx: {
        type: Number,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    modifed_at: {
        type: Date,
        required: false,
        default: Date.now(),
    },
})

export default mongoose.model("post", PostScheme)
