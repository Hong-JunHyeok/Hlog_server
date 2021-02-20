"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_config_1 = require("./config/server.config");
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const server = express_1.default();
server.use(app_1.default);
mongoose_1.default
    .connect(server_config_1.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
server.listen(process.env.PORT || server_config_1.SERVER_PORT, () => {
    console.log(`server is listening`);
});
//# sourceMappingURL=server.js.map