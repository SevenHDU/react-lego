const path = require('path');
const globy = require('globy');
const rootPath = process.cwd();
const ResetRequireWebpackPlugin = require('./resetRequireWebpackPlugin.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');


function resolveFromRoot(filePath) {
    return path.join(rootPath, filePath);
}


let files = globy.glob(resolveFromRoot('/src/modules')+ '**/*.js', {
});

console.log(files);

module.exports = {
    mode: "development",
    optimization: {
        splitChunks: {
            cacheGroups: {
                modules: {
                    minSize: 0,
                    test: /src\/modules[\\/]/,
                    name(module, chunks, cacheGroupKey) {
                        const moduleFileName = module
                            .identifier()
                            .split("/")
                            .reduceRight(item => item);
                        const allChunksNames = chunks
                            .map(item => item.name)
                            .join("~");
                        console.log(`cacheGroupKey: ${cacheGroupKey}`);
                        console.log(`allChunksNames: ${allChunksNames}`);
                        console.log(`moduleFileName: ${moduleFileName}`);
                        return `${cacheGroupKey}-${moduleFileName}`;
                    },
                    chunks: "all"
                }
            }
        }
    },
    entry: resolveFromRoot("/src/index.js"),
    output: {
        path: resolveFromRoot("/dist"),
        filename: "index.js",
        libraryTarget: "commonjs2"
    },
    devtool: "inline-cheap-source-map",
    module: {
        // rules: [
        //     {
        //         test: /\.js$/,
        //         include: [path.resolve(resolveFromRoot("/src"))],
        //         use: "babel-loader"
        //     }
        // ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            
        })
    ]
    // plugins: [new ResetRequireWebpackPlugin()]
};