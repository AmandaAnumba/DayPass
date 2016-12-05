module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: '../src/images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: '../www/images/',
        }]
    },
};