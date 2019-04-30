exports.config = {
    capabilities: {
        browserName: 'chrome',
        // args: ['no-sandbox']
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['./feature_files/*.feature'],

    cucumberOpts: {
        'no-colors': true,
        require: ['./step_definitions/*.steps.js'],
        tags: [],
        strict: true,
        // format: ['pretty'],
        dryRun: false,
        compiler: [],
        failFast: true
    },

    onPrepare: function () {
        browser.manage().window().maximize();
        browser.ignoreSynchronization = true;
        const chai = require('chai'),
            chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        chai.should();

        // require object with custom waits and copy the values of all enumerable own properties to global object
        const customWaits = require('./helpers/customWaits');
        Object.assign(global, customWaits);
    },

    getPageTimeout: 30000,
    allScriptsTimeout: 30000,
    plugins: []
};