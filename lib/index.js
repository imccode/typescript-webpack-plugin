"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypescriptWebpackPlugin = void 0;
const merge_1 = require("./merge");
const rules_1 = __importDefault(require("./rules"));
class TypescriptWebpackPlugin {
    constructor(options = {}) {
        this.options = {};
        this.options = options;
    }
    apply(compiler) {
        var _a, _b;
        compiler.options.resolve.extensions = [
            ...(((_a = compiler.options.resolve) === null || _a === void 0 ? void 0 : _a.extensions) || []),
            ...['.ts', '.tsx', '.js', '.jsx']
        ];
        this.options = merge_1.mergeOptions(this.options, compiler);
        (_b = compiler.options.module) === null || _b === void 0 ? void 0 : _b.rules.push(...rules_1.default(this.options, compiler));
    }
}
exports.TypescriptWebpackPlugin = TypescriptWebpackPlugin;
__exportStar(require("./types"), exports);
exports.default = TypescriptWebpackPlugin;
module.exports = TypescriptWebpackPlugin;
