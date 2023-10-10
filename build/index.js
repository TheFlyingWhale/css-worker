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
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const creator_1 = require("./utils/creator");
const variableHandlers_1 = require("./utils/variableHandlers");
const converters_1 = require("./utils/converters");
const myProgram = () => __awaiter(void 0, void 0, void 0, function* () {
    const dirName = "./dist";
    const doesDistExist = (0, fs_1.existsSync)(dirName);
    if (doesDistExist)
        (0, fs_1.rmSync)(dirName, { recursive: true });
    (0, fs_1.mkdirSync)(dirName);
    const test = {
        name: "test",
        location: "./dist/",
        extension: "css",
    };
    const variables = [
        {
            name: "red-500",
            value: "EF4444",
        },
        {
            name: "orange-500",
            value: "EAB308",
        },
        {
            name: "blue-500",
            value: "3B82F6",
        },
    ];
    (0, creator_1.createFile)({
        meta: test,
        content: (0, variableHandlers_1.createCssVariableCollection)(variables),
    });
    const hexes = ["#f2f21f"];
    hexes.forEach((hex) => {
        console.log((0, converters_1.hexToRGB)(hex));
    });
});
myProgram();
