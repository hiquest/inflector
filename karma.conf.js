// Karma configuration
// Generated on Sat Apr 19 2014 10:43:39 GMT+0400 (SAMT)

module.exports = function (config) {
    config.set({

        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'inflector.min.js',
            'test/inflector_spec.coffee'
        ],
        exclude: [ ],
        plugins: [
            'karma-jasmine',
            'karma-coffee-preprocessor',
            'karma-phantomjs-launcher'
        ],
        preprocessors: { '**/*.coffee': 'coffee' },
        coffeePreprocessor: {
            // options passed to the coffee compiler
            options: {
                bare: true,
                sourceMap: true
            }
        },

        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    });
};
