"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CommentSchema = new mongoose_1.default.Schema({
    content: { type: String, required: true },
    authorId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User", required: true },
    postId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Post", required: true },
});
exports.default = mongoose_1.default.model("comment", CommentSchema);
//# sourceMappingURL=Comment.js.map