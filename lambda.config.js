const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                parser: {
                    amd: false
                }
            }
        ]
    },
    plugins: [new webpack.DefinePlugin({ 'global.GENTLY': false })],
    // optimization: { minimize: false }
};
