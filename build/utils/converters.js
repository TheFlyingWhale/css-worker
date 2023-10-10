"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToRGB = exports.validateHexcolorString = exports.hexDigitToDecimal = exports.hexTable = void 0;
exports.hexTable = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
};
const HexRegEx = /^#?[0-9A-Fa-f]{6}$/;
const hexDigitToDecimal = (digits) => {
    const firstDigit = digits[0];
    const secondDigit = digits[1];
    let sum = 0;
    sum = sum + exports.hexTable[firstDigit] * 16;
    sum = sum + exports.hexTable[secondDigit];
    return sum;
};
exports.hexDigitToDecimal = hexDigitToDecimal;
const validateHexcolorString = (color) => {
    if (!HexRegEx.test(color)) {
        throw new Error(`Invalid hex string. All characters must be a valid hexadecimal. Provided string: ${color}`);
    }
    const length = color.length;
    if (length < 6 || length > 7) {
        throw new Error(`Invalid hex string. String length cannot be less than 6 or more than 7. Provided string: ${color}`);
    }
    if (length === 7 && color[0] !== "#") {
        throw new Error(`Invalid hex string. First character is not a octothorpe. Provided string: ${color}`);
    }
};
exports.validateHexcolorString = validateHexcolorString;
const hexToRGB = (color) => {
    (0, exports.validateHexcolorString)(color);
    color = color.toLowerCase();
    const length = color.length;
    if (length === 7) {
        color = color.slice(1, 7);
    }
    const red = (0, exports.hexDigitToDecimal)(color.slice(0, 2));
    const green = (0, exports.hexDigitToDecimal)(color.slice(2, 4));
    const blue = (0, exports.hexDigitToDecimal)(color.slice(4, 6));
    return {
        red: red,
        green: green,
        blue: blue,
    };
};
exports.hexToRGB = hexToRGB;
