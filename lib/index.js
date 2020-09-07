"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
            ...['.ts', 'tsx', '.js', '.jsx']
        ];
        this.options = merge_1.mergeOptions(this.options, compiler);
        (_b = compiler.options.module) === null || _b === void 0 ? void 0 : _b.rules.push(...rules_1.default(this.options, compiler));
    }
}
exports.default = TypescriptWebpackPlugin;
