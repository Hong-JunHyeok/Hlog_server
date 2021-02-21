"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("../../../../models/Post"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, nickname, content, thumnail } = req.body;
        Post_1.default.create({
            title,
            nickname,
            content,
            thumnail,
        }).then((newPost) => res.status(200).json({
            newPost,
            message: "create post success",
        }));
    }
    catch (error) {
        res.status(500).json({
            message: "create post fail",
            error,
        });
    }
});
//# sourceMappingURL=createPost.js.map