"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_config_1 = require("./config/server.config");
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./app"));
const server = express_1.default();
server.use(app_1.default);
server.listen(server_config_1.SERVER_PORT, () => {
    console.log(`server is listening ${server_config_1.SERVER_PORT}`);
});
//# sourceMappingURL=server.js.map