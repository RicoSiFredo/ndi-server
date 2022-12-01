"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumeric = exports.goodString = void 0;
function goodString(str, minLength, maxLength) {
    let res;
    if (typeof str === "string") {
        res = str.length >= minLength && str.length <= maxLength;
    }
    else {
        res = false;
    }
    return res;
}
exports.goodString = goodString;
function isNumeric(str) {
    if (typeof str != "string")
        return false; // we only process strings!  
    return !isNaN(parseInt(str)); // ...and ensure strings of whitespace fail
}
exports.isNumeric = isNumeric;
//# sourceMappingURL=utils.js.map