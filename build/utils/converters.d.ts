export type HexDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | "a" | "b" | "c" | "d" | "e" | "f";
export declare const hexTable: Record<HexDigit, number>;
export type HexDigits = `${HexDigit}${HexDigit}`;
export type RGBValues = {
    red: number;
    green: number;
    blue: number;
};
export declare const hexDigitToDecimal: (digits: HexDigits) => number;
export declare const validateHexcolorString: (color: string) => void;
export declare const hexToRGB: (color: string) => RGBValues;
