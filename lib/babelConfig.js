"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cosmiconfig_1 = require("cosmiconfig");
exports.default = (options, compiler) => {
    const defaultBabelConfig = {
        presets: [
            ['@babel/preset-env', { modules: false, useBuiltIns: 'usage', corejs: 3 }],
            '@babel/preset-typescript'
        ],
        plugins: [
            '@babel/plugin-proposal-nullish-coalescing-operator',
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-export-namespace-from',
            ['@babel/plugin-transform-runtime', { corejs: 3 }]
        ]
    };
    const userBabelConfig = cosmiconfig_1.cosmiconfigSync('babel').search();
    const returnKey = (data) => {
        if (typeof data === 'string') {
            return data;
        }
        if (Array.isArray(data) && data.length > 0) {
            const name = data[0];
            if (typeof name === 'string') {
                return name;
            }
        }
        return '';
    };
    if (userBabelConfig) {
        const { presets, plugins } = userBabelConfig.config;
        if (presets && Array.isArray(presets)) {
            defaultBabelConfig.presets.forEach((item, index) => {
                const key = returnKey(item);
                presets.forEach((userPareset, userIndex) => {
                    const useKey = returnKey(userPareset);
                    if (useKey !== '' && key === useKey) {
                        defaultBabelConfig.presets[index] = userPareset;
                        delete presets[userIndex];
                    }
                });
            });
            defaultBabelConfig.presets = [...defaultBabelConfig.presets, ...presets.filter(item => !!item)];
        }
        if (plugins && Array.isArray(plugins)) {
            defaultBabelConfig.plugins.forEach((item, index) => {
                const key = returnKey(item);
                plugins.forEach((userPlugin, userIndex) => {
                    const useKey = returnKey(userPlugin);
                    if (useKey !== '' && key === useKey) {
                        defaultBabelConfig.plugins[index] = userPlugin;
                        delete plugins[userIndex];
                    }
                });
            });
            defaultBabelConfig.plugins = [...plugins.filter(item => !!item), ...defaultBabelConfig.plugins];
        }
    }
    return defaultBabelConfig;
};
