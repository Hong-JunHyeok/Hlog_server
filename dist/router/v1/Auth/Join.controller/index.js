"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Join_1 = __importDefault(require("./Join"));
const express_1 = require("express");
const router = express_1.Router();
router.post("/", Join_1.default);
//# sourceMappingURL=index.js.map