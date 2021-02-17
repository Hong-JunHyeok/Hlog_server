"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_1 = __importDefault(require("./Auth"));
const Comment_1 = __importDefault(require("./Comment"));
const Post_1 = __importDefault(require("./Post"));
const router = express_1.Router();
router.use(Auth_1.default);
router.use(Comment_1.default);
router.use(Post_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map