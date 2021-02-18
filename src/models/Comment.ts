import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
})

export default mongoose.model("comment", CommentSchema)
