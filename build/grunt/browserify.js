module.exports = {
    default: {
        files: [{
            expand: true,
            cwd: '../src/js/',
            src: ['*.js', '!third-party/*.js'],
            dest: '../www/js/'
        }],
    },
    ts: {
        files: {
            '../www/js/app.js': ['../app/**/*.js']
        }
    }
}