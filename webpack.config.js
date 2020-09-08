const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader','less-loader']
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                  }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                  }, {
                    loader: 'less-loader', // compiles Less to CSS
                    options: {
                        lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
                        modifyVars: {
                            'primary-color': '#545cd8',
                            'link-color': '#545cd8',
                            'border-radius-base': '2px',
                        },
                        javascriptEnabled: true,
                        },
                   },
                }],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}