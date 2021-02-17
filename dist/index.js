"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get("/api/hello", (req, res) => {
    res.send("hello world");
});
app.listen(8000, () => {
    console.log("server is listening 8000");
});
//# sourceMappingURL=index.js.map