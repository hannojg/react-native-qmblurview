// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);
const root = path.resolve(__dirname, '..')

/** @type {import('expo/metro-config').MetroConfig} */
const config = {
    watchFolders: [root],
    resolver: {
        // block all node_modules in ../package/node_modules
        blockList: [
            /..\/package\/node_modules\/.*/,
        ],
    }
}


module.exports = mergeConfig(defaultConfig, config);
