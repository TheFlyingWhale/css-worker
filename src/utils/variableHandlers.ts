export type CssVariable = {
    name: string
    value: string
}

export type CreateCssVariable = (variable: CssVariable) => string

export const createCssVariable: CreateCssVariable = (variable) => {
    return `\t--${variable.name}: ${variable.value};\n`
}

export type CreateCssVariableCollection = (variables: CssVariable[]) => string

export const createCssVariableCollection: CreateCssVariableCollection = (
    variables
) => {
    let collectionString = ":root {\n"
    variables.forEach((variable) => {
        collectionString = collectionString + createCssVariable(variable)
    })
    return collectionString + "}"
}
