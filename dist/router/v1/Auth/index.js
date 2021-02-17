"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Login_1 = __importDefault(require("./Login.controller/Login"));
const Join_1 = __importDefault(require("./Join.controller/Join"));
const router = express_1.Router();
router.use("/login", Login_1.default);
router.use("/join", Join_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map