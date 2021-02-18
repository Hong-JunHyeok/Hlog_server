"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Login_1 = __importDefault(require("./Login"));
const express_1 = require("express");
const router = express_1.Router();
router.post("/", Login_1.default);
//# sourceMappingURL=index.js.map