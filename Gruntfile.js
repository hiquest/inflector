/*global module:false*/
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        // Metadata.
        meta: {
            version: '1.0.0'
        },
        banner: '/*! ru_inflector - v<%= meta.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* https://github.com/hiquest/inflector\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
            'Yanis T; Licensed MIT */\n',
        coffee: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: 'src/inflector.coffee',
                dest: 'inflector.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: 'inflector.js',
                dest: 'inflector.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['coffee', 'uglify']);

};
