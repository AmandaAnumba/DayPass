module.exports = {
    configs: {
        files: ['Gruntfile.js', 'grunt/*.js'],
        options: {
            reload: true
        }
    },
    styles: {
        files: ['../src/sass/*.scss'],
        tasks: ['newer:compass:all']
    }, 
    style_imports: {
        files: [
            '../src/sass/modules/**/*.scss',
            '../src/sass/partials/**/*.scss',
            '../src/sass/third-party/**/*.scss'
        ],
        tasks: ['compass:all']
    }, 
    ts: {
        files: [
            '../app/**/*.js'
        ],
        tasks: ['browserify:ts']
    },
    scripts: {
        files: [
            '../src/js/*.js'
        ],
        tasks: ['browserify:default']
    },
    images: {
        files: [
            '../src/images/**/*.{png,jpg,jpeg,gif}', 
        ],
        tasks: ['imagemin:all']
    }
}; 