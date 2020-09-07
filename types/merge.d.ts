import { Compiler } from 'webpack';
import { TypescriptWebpackPluginOptions } from './types';
export declare const mergeOptions: (options: TypescriptWebpackPluginOptions | undefined, compiler: Compiler) => TypescriptWebpackPluginOptions;
