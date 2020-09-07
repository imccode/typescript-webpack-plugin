import { Compiler } from 'webpack';
import { TypescriptWebpackPluginOptions } from './types';
declare const _default: (options: TypescriptWebpackPluginOptions, compiler: Compiler) => {
    presets: (string | (string | {
        modules: boolean;
        useBuiltIns: string;
        corejs: number;
    })[])[];
    plugins: (string | (string | {
        legacy: boolean;
    })[] | (string | {
        loose: boolean;
    })[] | (string | {
        corejs: number;
    })[])[];
};
export default _default;
