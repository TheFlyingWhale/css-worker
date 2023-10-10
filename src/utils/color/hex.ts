import { RGB } from "@ts/types"

export type HexDigit =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | "a"
    | "b"
    | "c"
    | "d"
    | "e"
    | "f"

export const hexTable: Record<HexDigit, number> = {
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
}

const HexRegEx = /^#?[0-9A-Fa-f]{6}$/

export type HexDigits = `${HexDigit}${HexDigit}`

export const hexDigitToDecimal = (digits: HexDigits) => {
    const firstDigit = digits[0] as HexDigit
    const secondDigit = digits[1] as HexDigit
    let sum = 0
    sum = sum + hexTable[firstDigit] * 16
    sum = sum + hexTable[secondDigit]
    return sum
}

export const validateHexcolorString = (color: string) => {
    if (!HexRegEx.test(color)) {
        throw new Error(
            `Invalid hex string. All characters must be a valid hexadecimal. Provided string: ${color}`
        )
    }

    const length = color.length
    if (length < 6 || length > 7) {
        throw new Error(
            `Invalid hex string. String length cannot be less than 6 or more than 7. Provided string: ${color}`
        )
    }

    if (length === 7 && color[0] !== "#") {
        throw new Error(
            `Invalid hex string. First character is not a octothorpe. Provided string: ${color}`
        )
    }
}

export const hexToRGB = (color: string): RGB => {
    validateHexcolorString(color)
    color = color.toLowerCase()
    const length = color.length
    if (length === 7) {
        color = color.slice(1, 7)
    }

    const red = hexDigitToDecimal(color.slice(0, 2) as HexDigits)
    const green = hexDigitToDecimal(color.slice(2, 4) as HexDigits)
    const blue = hexDigitToDecimal(color.slice(4, 6) as HexDigits)

    return {
        red: red,
        green: green,
        blue: blue,
    }
}
