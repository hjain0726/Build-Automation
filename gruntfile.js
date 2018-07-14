module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: ['**/*.js','css/*.css'],
                tasks: ['uglify:myfiles','cssmin'],
                options: {
                    spawn: false,
                },
            },
        },

        uglify: {
            myfiles: {
                files: {
                    'release/compress.min.js': ['Js/*.js']
                }
            }
        },

        cssmin: {
            options: {
              mergeIntoShorthands: false,
              roundingPrecision: -1
            },
            target: {
              files: {
                'release/compress.css': ['css/*.css']
              }
            }
          }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch']);
};