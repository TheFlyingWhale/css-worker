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
const fileCreator_1 = require("./utils/fileCreator");
const variableHandlers_1 = require("./utils/variableHandlers");
const hex_1 = require("./utils/color/hex");
const rgb_1 = require("./utils/color/rgb");
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
    const rgbTest = {
        name: "rgbTest",
        location: "./dist/",
        extension: "css",
    };
    const rgbaTest = {
        name: "rgbaTest",
        location: "./dist/",
        extension: "css",
    };
    const variables = [
        {
            name: "red-500",
            value: "#EF4444",
        },
        {
            name: "orange-500",
            value: "#EAB308",
        },
        {
            name: "blue-500",
            value: "#3B82F6",
        },
    ];
    (0, fileCreator_1.createFile)({
        meta: test,
        content: (0, variableHandlers_1.createCssVariableCollection)(variables),
    });
    (0, fileCreator_1.createFile)({
        meta: rgbTest,
        content: (0, rgb_1.rgbToRgbValue)((0, hex_1.hexToRGB)("#EAB308")),
    });
    (0, fileCreator_1.createFile)({
        meta: rgbaTest,
        content: (0, rgb_1.rgbToRgbaValue)((0, hex_1.hexToRGB)("#EAB308"), 50),
    });
    const hexes = ["#f2f21f"];
    hexes.forEach((hex) => {
        console.log((0, hex_1.hexToRGB)(hex));
    });
});
myProgram();
