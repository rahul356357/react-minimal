
const path = require('path');
module.exports =  {
    mode:'development',
    entry:{
        main:'./app.js',
    },
    output:{
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        publicPath:'/'
    },
    module:{
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{ loader: 'babel-loader'}],
        }],
    },
    devServer:{
        port:9090,
        hot: true,
        inline:true,
        historyApiFallback: true,
        contentBase:path.resolve(__dirname , 'public'),
    }
}