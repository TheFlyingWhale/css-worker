import { mkdirSync, existsSync, rmSync } from "fs"
import type { FileMeta } from "@ts/types"
import { createFile } from "@utils/creator"
import { CssVariable } from "@utils/variableHandlers"
import { createCssVariableCollection } from "@utils/variableHandlers"
import { hexDigitToDecimal, hexToRGB } from "@utils/converters"

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

    const variables: CssVariable[] = [
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
    ]

    createFile({
        meta: test,
        content: createCssVariableCollection(variables),
    })

    const hexes = ["#f2f21f"]

    hexes.forEach((hex) => {
        console.log(hexToRGB(hex))
    })
}

myProgram()
