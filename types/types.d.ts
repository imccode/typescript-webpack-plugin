export interface TypescriptWebpackPluginOptions {
    cacheDirectory?: string | boolean;
}
export declare type ArrayOptions = Array<string | Array<string | {
    [key: string]: any;
}>>;
export interface BabelConfiguration {
    presets?: ArrayOptions;
    plugins?: ArrayOptions;
}
export declare type SmartCosmiconfigResult<T> = {
    config: T;
    filepath: string;
    isEmpty?: boolean;
} | null;
