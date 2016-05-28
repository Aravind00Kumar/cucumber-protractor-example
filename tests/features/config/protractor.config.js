var path = require('path');

exports.config = {
    seleniumServerJar: path.join(__dirname, "../../../bin/selenium-server-standalone-2.53.0.jar"),
    chromeDriver: path.join(__dirname, "../../../bin/chromedriver.exe"),

    specs: ['../*.feature'],

    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        require: '../step_definitions/*_steps.js',
        format: 'pretty'
    },
    // multiCapabilities: [{
    //     browserName: 'chrome',
    //     chromeOptions: {
    //         args: ['--test-type']
    //     }
    // }],
    
    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path': path.join(__dirname, "../../../bin/phantomjs.exe"),
        'phantomjs.cli.args': ['--ignore-ssl-errors=true', '--web-security=false'],
        'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    }

}
