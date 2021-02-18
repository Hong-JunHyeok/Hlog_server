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
const User_1 = __importDefault(require("../../../../models/User"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, nickname, name, age, intro } = req.body;
    const payload = {
        email,
        password,
        nickname,
        name,
        age,
        intro,
    };
    try {
        User_1.default.create(payload).then((newUser) => {
            res.status(200).json({
                newUser,
                message: "회원가입에 성공했습니다!",
            });
        });
    }
    catch (error) {
        res.status(500).json({
            message: "server 오류입니다.",
        });
    }
});
//# sourceMappingURL=Join.js.map