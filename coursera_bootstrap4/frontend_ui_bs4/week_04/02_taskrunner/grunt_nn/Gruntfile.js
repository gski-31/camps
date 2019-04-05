module.exports = function (grunt) {

    // configuration
    grunt.initConfig({
        //pass in plugin options and file refs
        concat: {
            js: {
                src: ['node_modules/jquery/dist/jquery.slim.min.js',
                    'node_modules/popper.js/dist/umd/popper.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                    'js/scripts.js'],
                    dest: 'build/scripts.js'
            },
            css: {
                src: ['node_modules/bootstrap/dist/css/bootstrap.min.css',
                    'node_modules/font-awesome/css/font-awesome.min.css',
                    'node_modules/bootstrap-social/bootstrap-social.css',
                    'css/styles.css'],
                    dest: 'build/styles.css'
            }
        },
        sass: {
            build: {
                files: [{
                    src: 'css/styles.scss',
                    dest: 'css/new_styles.css'
                }]
            }
        },
        uglify: {
            build: {
                files: [{
                    src: 'build/scripts.js',
                    dest: 'build/ugly_scripts.js'
                }]
            }
        },

    });
    // load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // register tasks
    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);
    // or just type last portion into terminal

};