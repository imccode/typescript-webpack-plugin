"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const babelConfig_1 = __importDefault(require("./babelConfig"));
exports.default = (options, compiler) => {
    const rules = [
        {
            test: /\.(t|j)sx?$/,
            exclude: /(node_modules|bower_components)/,
            use: [
                {
                    loader: 'babel-loader',
                    options: Object.assign({ cwd: compiler.context, cacheDirectory: options.cacheDirectory }, babelConfig_1.default(options, compiler))
                }
            ]
        }
    ];
    return rules;
};
