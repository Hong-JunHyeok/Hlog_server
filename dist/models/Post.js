"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PostScheme = new mongoose_1.default.Schema({
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
    thumnail: {
        type: String,
    },
});
exports.default = mongoose_1.default.model("post", PostScheme);
//# sourceMappingURL=Post.js.map