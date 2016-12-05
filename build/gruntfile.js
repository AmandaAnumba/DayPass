module.exports = function(grunt) {
    /* load all grunt tasks */
    require('load-grunt-tasks')(grunt);
    
    /* load grunt config */
    require('load-grunt-config')(grunt);

    grunt.loadNpmTasks('grunt-collection');
    
    /* register grunt tasks */
    grunt.registerTask('build', 'Build the app', [
        'jshint:all',
        'browserify:all',
        'uglify:all',
        'imagemin:all'
    ]);
};