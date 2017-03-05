var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/docs',
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_moules/, loader: "babel-loader"},
            {
                test: /\.less$/,
                use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'less-loader'
                ]
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}