import { Compiler } from 'webpack';
import { TypescriptWebpackPluginOptions } from './types';
declare class TypescriptWebpackPlugin {
    options: TypescriptWebpackPluginOptions;
    constructor(options?: TypescriptWebpackPluginOptions);
    apply(compiler: Compiler): void;
}
export default TypescriptWebpackPlugin;
