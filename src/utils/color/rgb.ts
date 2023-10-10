import { RGB } from "@ts/types"

export type RgbToRgbValue = (value: RGB) => string

export const rgbToRgbValue: RgbToRgbValue = (value) => {
    return `rgb(${value.red}, ${value.green}, ${value.blue});`
}

export type RgbToRgbaValue = (value: RGB, opacity: number) => string

export const rgbToRgbaValue: RgbToRgbaValue = (value, opacity) => {
    return `rgba(${value.red}, ${value.green}, ${value.blue}, ${
        opacity / 100
    });`
}
