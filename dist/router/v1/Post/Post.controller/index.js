"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createPost_1 = __importDefault(require("./createPost"));
const removePost_1 = __importDefault(require("./removePost"));
const updatePost_1 = __importDefault(require("./updatePost"));
const getPost_1 = __importDefault(require("./getPost"));
const getPosts_1 = __importDefault(require("./getPosts"));
const router = express_1.Router();
router.use("/createPost", createPost_1.default);
router.use("/removePost", removePost_1.default);
router.use("/updatePost", updatePost_1.default);
router.use("/getPost", getPost_1.default);
router.use("/getPosts", getPosts_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map