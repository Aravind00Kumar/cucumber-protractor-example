(function () {
    'use strict'

    function GruntConfig(grunt) {
        grunt.initConfig({
            clean: {
                src: 'build'
            },
            copy: {
                main: {
                    files: [
                        // includes files within path
                        { expand: true, cwd: 'src', src: ['app/**', 'styles/**'], dest: 'build' },
                        {
                            expand: true, cwd: 'src/bower_components', filter: 'isFile', src: [
                                'angular/angular.js',
                                'angular-route/angular-route.js'
                            ], dest: 'build/lib'
                        },
                    ],
                },
            },
            express: {
                server: {
                    options: {
                        port: '3000',
                        bases: ['build']
                    }
                }
            },
        });

        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-express');


        grunt.registerTask('start-server', ['express', 'express-keepalive']);
        grunt.registerTask('default', ['clean', 'copy', 'make-index-file']);

        // custom tasks        
        grunt.registerTask('make-index-file', function () {
            var file = grunt.file.read(__dirname + '\\src\\index.html');
            grunt.file.write(__dirname + '\\build\\index.html', file.replace(/bower_components/g, 'lib'));
        })

    }
    module.exports = GruntConfig;
})();