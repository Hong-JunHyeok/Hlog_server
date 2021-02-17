"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./Post.controller/index"));
const router = express_1.Router();
router.use("/post", index_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map