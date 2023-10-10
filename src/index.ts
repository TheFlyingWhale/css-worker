import { mkdirSync, existsSync, rmSync } from "fs"
import type { FileMeta } from "@ts/types"
import { createFile } from "@utils/fileCreator"
import { CssVariable } from "@utils/variableHandlers"
import { createCssVariableCollection } from "@utils/variableHandlers"
import { hexToRGB } from "@utils/color/hex"
import { rgbToRgbValue, rgbToRgbaValue } from "@utils/color/rgb"

const myProgram = async () => {
    const dirName = "./dist"

    const doesDistExist = existsSync(dirName)
    if (doesDistExist) rmSync(dirName, { recursive: true })
    mkdirSync(dirName)

    const test: FileMeta = {
        name: "test",
        location: "./dist/",
        extension: "css",
    }

    const rgbTest: FileMeta = {
        name: "rgbTest",
        location: "./dist/",
        extension: "css",
    }

    const rgbaTest: FileMeta = {
        name: "rgbaTest",
        location: "./dist/",
        extension: "css",
    }

    const variables: CssVariable[] = [
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
    ]

    createFile({
        meta: test,
        content: createCssVariableCollection(variables),
    })

    createFile({
        meta: rgbTest,
        content: rgbToRgbValue(hexToRGB("#EAB308")),
    })

    createFile({
        meta: rgbaTest,
        content: rgbToRgbaValue(hexToRGB("#EAB308"), 50),
    })

    const hexes = ["#f2f21f"]

    hexes.forEach((hex) => {
        console.log(hexToRGB(hex))
    })
}

myProgram()
