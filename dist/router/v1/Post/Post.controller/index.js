"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createPost_1 = __importDefault(require("./createPost"));
const removePosts_1 = __importDefault(require("./removePosts"));
const removePost_1 = __importDefault(require("./removePost"));
const updatePost_1 = __importDefault(require("./updatePost"));
const getPost_1 = __importDefault(require("./getPost"));
const getPosts_1 = __importDefault(require("./getPosts"));
const router = express_1.Router();
router.post("/", createPost_1.default);
//아래의 라우터는 관리자 계정이 생길때 사용 자제하길 바람~
router.delete("/", removePosts_1.default);
router.delete("/:idx", removePost_1.default);
router.patch("/:idx", updatePost_1.default);
router.get("/:idx", getPost_1.default);
router.get("/", getPosts_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map