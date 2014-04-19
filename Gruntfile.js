/*global module:false*/
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    meta: {
      version: '0.1.0'
    },
    banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* http://PROJECT_WEBSITE/\n' +
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
//    concat: {
//      options: {
//        banner: '<%= banner %>',
//        stripBanners: true
//      },
//      dist: {
//        src: ['lib/FILE_NAME.js'],
//        dest: 'dist/FILE_NAME.js'
//      }
//    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: 'inflector.js',
        dest: 'inflector.min.js'
      }
    }
//    jshint: {
//      options: {
//        curly: true,
//        eqeqeq: true,
//        immed: true,
//        latedef: true,
//        newcap: true,
//        noarg: true,
//        sub: true,
//        undef: true,
//        unused: true,
//        boss: true,
//        eqnull: true,
//        globals: {}
//      },
//      gruntfile: {
//        src: 'Gruntfile.js'
//      },
//      lib_test: {
//        src: ['lib/**/*.js', 'test/**/*.js']
//      }
//    },
//    nodeunit: {
//      files: ['test/**/*_test.js']
//    },
//    watch: {
//      gruntfile: {
//        files: '<%= jshint.gruntfile.src %>',
//        tasks: ['jshint:gruntfile']
//      },
//      lib_test: {
//        files: '<%= jshint.lib_test.src %>',
//        tasks: ['jshint:lib_test', 'nodeunit']
//      }
//    }
  });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // These plugins provide necessary tasks.
//  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
//  grunt.loadNpmTasks('grunt-contrib-nodeunit');
//  grunt.loadNpmTasks('grunt-contrib-jshint');
//  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['coffee', 'uglify']);

};
