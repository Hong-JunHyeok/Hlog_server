"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get("/login", (req, res) => {
    res.status(200).json({
        message: "Login controlled",
    });
});
exports.default = router;
//# sourceMappingURL=login.controller.js.map