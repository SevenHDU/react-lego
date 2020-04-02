const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());


function resolveApp(relativePath) {
    const filePath = path.resolve(appDirectory, relativePath);

    return filePath;
}


const resolveModule = (resolveFn, filePath) => {
    const moduleFileExtensions = [
        'web.mjs',
        'mjs',
        'web.js',
        'js',
        'web.ts',
        'ts',
        'web.tsx',
        'tsx',
        'json',
        'web.jsx',
        'jsx',
    ];
    
    const extension = moduleFileExtensions.find(extension =>
        fs.existsSync(resolveFn(`${filePath}.${extension}`))
    );

    if (extension) {
        return resolveFn(`${filePath}.${extension}`);
    }

    return resolveFn(`${filePath}.js`);
};



module.exports = {
    resolveApp,
    resolveModule,
};

