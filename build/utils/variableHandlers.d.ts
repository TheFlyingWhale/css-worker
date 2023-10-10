export type CssVariable = {
    name: string;
    value: string;
};
export type CreateCssVariable = (variable: CssVariable) => string;
export declare const createCssVariable: CreateCssVariable;
export type CreateCssVariableCollection = (variables: CssVariable[]) => string;
export declare const createCssVariableCollection: CreateCssVariableCollection;
