"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const UserScheme = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator_1.default.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        },
        trim: true,
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (!validator_1.default.isStrongPassword(value)) {
                throw new Error("password is invalid");
            }
        },
        trim: true,
    },
    nickname: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: false,
        trim: true,
    },
    intro: {
        type: String,
        required: false,
        trim: true,
    },
    joined: {
        type: Date,
        required: true,
        default: Date.now(),
        trim: true,
    },
});
exports.default = mongoose_1.default.model("user", UserScheme);
//# sourceMappingURL=User.js.map