var HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webPackConfig = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist")
    },
    module: {
       
        loaders: [
            { 
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/ 
            },
            {
               test: /\.js?$/, // both .js and .jsx
               use: 'babel-loader'
//         include: path.resolve(process.cwd(), 'src'),
//         enforce: 'pre',
//         options: {
//           fix: true,
//         }
            },
            
        
            {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
        }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: "New Wepback project",
        template: "src/index.ejs"
    }), new ExtractTextPlugin({
        filename: 'main.css',
        allChunks: true
    })]
};

module.exports = webPackConfig