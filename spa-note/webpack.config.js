// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = {
//     entry: [ './src/main.js', './src/main.css' ],
//     output: { path:'/home/ubuntu/workspace/spa-note/public',filename:'bundle.js' },
//     module: {
//         rules:[
//             {
//                 test:/\.js$/,
//                 exclude: /node_modules/,
//                 use:'babel-loader'
//             },
//             {
//                 test: /\.css$/,
//                 use: ExtractTextPlugin.extract({
//                     loader:'css-loader!postcss-loader',
//                 }),
//             }
//         ],
//     },
//     devtool:'source-map',
//     devServer:{
//         host: '0.0.0.0',
//         contentBase:'public',
//         port: 8080,
//         inline:true,
//         historyApiFallback:true,
//         disableHostCheck: true,
//     },
//     plugins:[
//         new ExtractTextPlugin({filename: 'bundle.css'}),
//     ],
// };


const ExtractTextPlugin = require('extract-text-webpack-plugin');
    

module.exports = {
    entry: [
        './src/main.js', './src/main.css'
    ],
    output: {path:'/home/ubuntu/workspace/spa-note/public',filename:'bundle.js'},
    module: {
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'css-loader!postcss-loader'
                ),
            },
        ],
    },
    devServer: {
        host: '0.0.0.0',
        contentBase: './public',
        port: 8080,
        inline: true,
        historyApiFallback:true,
        stats: {
         version: false,
         hash: false,
         chunkModules: false,
        },
        disableHostCheck: true,
    },
    plugins:[
        new ExtractTextPlugin('bundle.css'),
    ],
    devtool:'source-map',
};