"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
app.use(express_1.default.json()); //bodyParsing
app.use(morgan_1.default("combined"));
app.use("/api", router_1.default);
app.use(cors_1.default({ origin: true, credentials: true }));
exports.default = app;
//# sourceMappingURL=app.js.map