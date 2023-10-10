import type { FileMeta } from "@ts/types"
import { writeFileSync } from "fs"

type CreateFileParameters = {
    meta: FileMeta
    content: any
}
type CreateFile = (fileData: CreateFileParameters) => void

export const createFile: CreateFile = async ({ meta, content }) => {
    writeFileSync(`./${meta.location}${meta.name}.${meta.extension}`, content)
}
