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
                            ], dest: 'build/libs'
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
            protractor: {
                options: {
                    keepAlive: false,
                },
                testTargetConfigFile: {
                    //configFile: "tests/e2e/config/protractor.config.js",
                    configFile: "tests/features/config/protractor.config.js",
                    args: {
                        baseUrl: 'http://localhost:3000/'
                    }
                },
            },
            debug: {
                options: {
                    open: true // do not open node-inspector in Chrome automatically 
                }
            },
        });

        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-express');
        grunt.loadNpmTasks('grunt-protractor-runner');
        grunt.loadNpmTasks('grunt-debug-task');


        grunt.registerTask('default', ['clean', 'copy', 'make-index-file']);
        grunt.registerTask('start-server', ['express', 'express-keepalive']);
        grunt.registerTask('run-e2e', [
            'express',
            'protractor']);

        // custom tasks        
        grunt.registerTask('make-index-file', function () {
            var file = grunt.file.read(__dirname + '\\src\\index.html');
            grunt.file.write(__dirname + '\\build\\index.html', file.replace(/bower_components/g, 'libs'));
        })

    }
    module.exports = GruntConfig;
})();