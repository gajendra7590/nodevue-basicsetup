const config = {
    devServer: {
        open: true,
        disableHostCheck: true,
    },
    pages: {
        index: {
            entry: 'src/index.js',
            template: 'public/index.html',
            filename: 'index.html',
        },
        // admin: {
        //     entry: 'src/admin.js',
        //     template: 'public/admin.html',
        //     filename: 'admin.html',
        // }
    },
    // ...config code
}
module.exports = config