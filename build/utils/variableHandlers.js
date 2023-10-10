"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCssVariableCollection = exports.createCssVariable = void 0;
const createCssVariable = (variable) => {
    return `\t--${variable.name}: #${variable.value};\n`;
};
exports.createCssVariable = createCssVariable;
const createCssVariableCollection = (variables) => {
    let collectionString = ":root {\n";
    variables.forEach((variable) => {
        collectionString = collectionString + (0, exports.createCssVariable)(variable);
    });
    return collectionString + "}";
};
exports.createCssVariableCollection = createCssVariableCollection;
