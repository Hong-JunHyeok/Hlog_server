import mongoose from "mongoose"

const PostScheme = new mongoose.Schema({
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
    },
})

export default mongoose.model("post", PostScheme)
