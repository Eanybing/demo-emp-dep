'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    grunt.loadNpmTasks('grunt-version-check');

    grunt.initConfig({
        app: {
            bower: '../external/bower_components',
            source: '../src/main/sourceapp',
            dist: '../src/main/webapp'
        },
        config: {
            development: {
                options: {
                    variables: {
                        'buildType': 'development',
                        'jsSuffix': '',
                        'sassStyle': 'expanded'
                    }
                }
            },
            production: {
                options: {
                    variables: {
                        'buildType': 'production',
                        'jsSuffix': '.min',
                        'sassStyle': 'compressed'
                    }
                }
            }
        },
        clean: {
            options: {
                force: true
            },
            files: ['<%= app.dist %>']
        },
        versioncheck: {
            target: {
                options: {
                    hideUpToDate: true
                }
            }
        },
        copy: {
            htmlEmpDept: {
                expand: true,
                flatten: true,
                cwd: '<%= app.source %>',
                src: ['**/*.html', '!index.html'],
                dest: '<%= app.dist %>/html'
            },
            indexEmpDept: {
                dest: '<%= app.dist %>/index.html', src: ['<%= app.source %>/index.html']
            },
            imgEmpDept: {
                expand: true,
                flatten: true,
                cwd: '<%= app.source %>/common/data/img',
                src: ['**/*.svg','**/*.png','**/*.jpg'],
                dest: '<%= app.dist %>/img'
            },
            fontsBootstrap: {
                expand: true,
                cwd: '<%= app.bower %>/bootstrap-sass/assets/fonts/bootstrap',
                src: ['**/*.*'],
                dest: '<%= app.dist %>/fonts/bootstrap'
            },
			fontsFontAwesome: {
                expand: true,
                cwd: '<%= app.bower %>/font-awesome/fonts',
                src: ['**/*.*'],
                dest: '<%= app.dist %>/fonts'
            },
            uiGridFonts: {
                expand: true,
                cwd: '<%= app.bower %>/angular-ui-grid',
                src: ['**/*.eot','**/*.woff','**/*.svg','**/*.ttf'],
                dest: '<%= app.dist %>/css'
            },
            data: {
                expand: true,
                cwd: '<%= app.source %>/common/data',
                src: ['**/*.json'],
                dest: '<%= app.dist %>/data/'
            }
        },
        concat: {
            jsAngularBootstrap: {
                dest: '<%= app.dist %>/js/librariesBundle<%= grunt.config.get("jsSuffix") %>.js',
                src: [
                    '<%= app.bower %>/jquery/jquery<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/datatables/media/js/jquery.dataTables<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/angular*/angular<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/angular*/angular-animate<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/angular*/ui-bootstrap-tpls<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/angular*/src/angular-ellipsis<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/angular*/angular-resource<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/angular*/angular-translate<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/angular*/angular-translate-handler-log<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/angular*/angular-translate-loader-static-files<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/angular*/release/angular-ui-router<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/angular*/angular-sanitize<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/angular*/dist/angular-permission<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/angular*/dist/angular-permission-ui<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/angular*/angular-ui-switch<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/ngInfiniteScroll/build/ng-infinite-scroll<%= grunt.config.get("jsSuffix") %>.js',
					'<%= app.bower %>/angular*/dist/angular-datatables<%= grunt.config.get("jsSuffix") %>.js',
					'<%= app.bower %>/angular*/dist/plugins/scroller/angular-datatables.scroller<%= grunt.config.get("jsSuffix") %>.js',
					'<%= app.bower %>/angular*/angular-tree-control.js',
                    '<%= app.bower %>/angular*/ui-grid<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.bower %>/angular*/src/ui-router-tabs<%= grunt.config.get("jsSuffix") %>.js'
                ]
            },
            jsEmpDept: {
                dest: '<%= app.dist %>/js/EmpDeptBundle<%= grunt.config.get("jsSuffix") %>.js',
                src: [
                    '<%= app.source %>/app.js',
                    '<%= app.source %>/**/*.js'
                ],
                options: {
                    banner: '(function() {\n\'use strict\';\n',
                    footer: '\n})();'
                }
            },
            css: {
                dest: '<%= app.dist %>/css/EmpDept<%= grunt.config.get("jsSuffix") %>.css',
                src: [
                    '<%= app.source %>/**/EmpDept.scss',
                    '<%= app.source %>/**/*.scss',
                    '!<%= app.source %>/**/_*.scss',
					'<%= app.bower %>/font-awesome/css/font-awesome.css',
					'<%= app.bower %>/angular*/angular-ui-switch.css',
					'<%= app.bower %>/angular*/css/angular-datatables.css',
					'<%= app.bower %>/dataTables/media/css/datatables.bootstrap.css',
					'<%= app.bower %>/angular*/css/tree-control.css',
					'<%= app.bower %>/bootstrap*/docs/assets/css/bootstrap.css',
					'<%= app.bower %>/angular*/ui-grid.css'
                ]
            }
        },
        sass: {
            options: {
                loadPath: ['<%= app.source %>/common/css', '<%= app.bower %>/bootstrap-sass/assets/stylesheets'],
                sourcemap: 'none',
                style: '<%= grunt.config.get("sassStyle") %>',
                trace: true
            },
            css: {
                files: {
                    '<%= app.dist %>/css/EmpDept<%= grunt.config.get("jsSuffix") %>.css': '<%= app.dist %>/css/EmpDept<%= grunt.config.get("jsSuffix") %>.css'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 3 versions']
            },
            files: {
                expand: true,
                cwd: '<%= app.dist %>/css',
                src: 'EmpDept*.css',
                dest: '<%= app.dist %>/css'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                undef: true,
                globals: {
                    document: true,
                    angular: true,
                    postal: true
                }
            },
            beforeconcat: ['<%= app.source %>/**/*.js'],
            afterconcat: ['<%= app.dist %>/js/EmpDeptBundle*.js']
        },
        ngAnnotate: {
            options: {
                singleQuotes: true,
            },
            production: {
                files: {
                    '<%= app.dist %>/js/EmpDeptBundle<%= grunt.config.get("jsSuffix") %>.js': ['<%= app.dist %>/js/EmpDeptBundle<%= grunt.config.get("jsSuffix") %>.js']
                }
            }
        },
        uglify: {
            development: {
                options: {
                    mangle: false,
                    beautify: true,
                    preserveComments: 'all'
                },
                files: {
                    '<%= app.dist %>/js/EmpDeptBundle<%= grunt.config.get("jsSuffix") %>.js': '<%= app.dist %>/js/EmpDeptBundle<%= grunt.config.get("jsSuffix") %>.js'
                }
            },
            production: {
                options: {
                    mangle: true,
                    compress: true,
                    preserveComments: false
                },
                files: {
                    '<%= app.dist %>/js/EmpDeptBundle<%= grunt.config.get("jsSuffix") %>.js': '<%= app.dist %>/js/EmpDeptBundle<%= grunt.config.get("jsSuffix") %>.js',
                    '<%= app.dist %>/js/librariesBundle<%= grunt.config.get("jsSuffix") %>.js': '<%= app.dist %>/js/librariesBundle<%= grunt.config.get("jsSuffix") %>.js'
                }
            }
        },
        processhtml: {
            production: {
                files: {
                    '<%= app.dist %>/index.html': '<%= app.dist %>/index.html'
                }
            }
        }
    });

    grunt.registerTask('development', [
        'clean',
        //'versioncheck',
        'config:development',
        'copy',
        'jshint:beforeconcat',
        'concat',
        'jshint:afterconcat',
        'sass',
        'autoprefixer',
        //'uglify:development'
    ]);
    grunt.registerTask('production', [
        'clean',
        'versioncheck',
        'config:production',
        'copy',
        'jshint:beforeconcat',
        'concat',
        'jshint:afterconcat',
        'sass',
        'autoprefixer',
        'ngAnnotate',
        'uglify:production',
        'processhtml'
    ]);

    grunt.registerTask('default', ['development']);
};