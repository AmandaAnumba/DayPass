module.exports = {
    options: {
        compress: {
            drop_console: true
        },
        sourceMap: false,
        sourceMapIncludeSources: false
    },  
    all: {
        files: [{
            expand: true,
            cwd: '../www/js/',
            src: ['*.js', '!**/*.min.js'], 
            dest: '../www/js/', 
            ext: '.js',
            extDot: 'last'
        }],
    }
}