"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../../../../lib/token");
const User_1 = __importDefault(require("../../../../models/User"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        yield User_1.default.findOne({ email: email, password: password }).then((userData) => {
            if (!userData) {
                res.status(401).json({
                    message: "없는 사용자 입니다.",
                });
            }
            else {
                const token = token_1.createToken(userData);
                console.log(token);
                res.status(200).json({
                    userData,
                    token,
                });
            }
        });
    }
    catch (error) {
        res.status(500).json({
            message: "server 오류",
            error,
        });
    }
});
//# sourceMappingURL=Login.js.map