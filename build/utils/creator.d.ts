import type { FileMeta } from "../types/types";
type CreateFileParameters = {
    meta: FileMeta;
    content: any;
};
type CreateFile = (fileData: CreateFileParameters) => void;
export declare const createFile: CreateFile;
export {};
