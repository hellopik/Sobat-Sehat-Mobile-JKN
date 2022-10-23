const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(
        {
            ...env,
            babel: {
// removed some unrelevant segments
            },
        },
        argv
    );
    config.module.rules.push({
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: ['react-native-svg-transformer-fix-expo/loader'],
    });
    return config;
};