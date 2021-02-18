"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKeyConfig_1 = require("../config/secretKeyConfig");
const createToken = (userData) => {
    const { email, password } = userData;
    const payload = {
        email,
        password,
    };
    const options = {
        expiresIn: "30d",
    };
    return jsonwebtoken_1.default.sign(payload, secretKeyConfig_1.SECRET_KEY, options);
};
exports.createToken = createToken;
//# sourceMappingURL=token.js.map