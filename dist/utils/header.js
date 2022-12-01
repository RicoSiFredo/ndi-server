"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setHeader = void 0;
function setHeader(req, res) {
    const allowedOrigins = ["http://localhost:3001", "http://localhost:3000"];
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization, Accept");
    const origin = req.headers.origin;
    console.log("origin", origin);
    if (allowedOrigins.includes(origin)) {
        console.log("origin1", origin);
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
}
exports.setHeader = setHeader;
//# sourceMappingURL=header.js.map