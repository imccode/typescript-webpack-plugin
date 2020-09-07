"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeOptions = void 0;
const path_1 = __importDefault(require("path"));
exports.mergeOptions = (options = {}, compiler) => {
    const defaultOptions = {
        cacheDirectory: compiler.options.mode === 'production'
            ? false
            : path_1.default.resolve(compiler.context, 'node_modules/.cache', 'typescript')
    };
    const mergeOptions = Object.assign(Object.assign({}, defaultOptions), options);
    if (options.cacheDirectory && typeof options.cacheDirectory === 'string') {
        mergeOptions.cacheDirectory = options.cacheDirectory;
    }
    return mergeOptions;
};
