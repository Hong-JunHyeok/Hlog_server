"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const secretKeyConfig_1 = require("../config/secretKeyConfig");
function hashingPassword(password) {
    const encrypt = crypto_1.default.createHmac("sha256", secretKeyConfig_1.SECRET_KEY).update(password).digest("hex");
    return encrypt;
}
exports.default = hashingPassword;
//# sourceMappingURL=hashingPassword.js.map