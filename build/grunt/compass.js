module.exports = {
    all: {
        options: {
            environment: "production",
            outputStyle: "compressed",
            httpPath: "../", 
            sassDir: "../src/sass/",
            cssDir: "../www/css/",
            imagesDir: "../www/images/",
            javascriptsDir: "../www/js/",
            fontsDir: "../www/fonts/",
            noLineComments: true,
            importPath: [
                '../node_modules/ionic-angular/themes',
                '../node_modules/ionicons/dist/scss',
                '../node_modules/ionic-angular/fonts'
            ]
        },
        files: [{
            expand: true,
            cwd: '../src/sass/',
            src: [
                '*.scss',
                '!third-party/**/*.scss'
            ], 
            dest: '../www/css/',
            ext: '.css',
            extDot: 'last'
        }]
    }
};