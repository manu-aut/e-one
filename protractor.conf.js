
/*

                     __                        __                
_____________  _____/  |_____________    _____/  |_  ___________ 
\____ \_  __ \/  _ \   __\_  __ \__  \ _/ ___\   __\/  _ \_  __ \
|  |_> >  | \(  <_> )  |  |  | \// __ \\  \___|  | (  <_> )  | \/
|   __/|__|   \____/|__|  |__|  (____  /\___  >__|  \____/|__|   
|__|                                 \/     \/                   


**/

const
    { ConsoleReporter } = require('@serenity-js/console-reporter'),
    { ArtifactArchiver } = require('@serenity-js/core'),
    { Photographer, TakePhotosOfInteractions } = require('@serenity-js/protractor'),
    { SerenityBDDReporter } = require('@serenity-js/serenity-bdd'),
    isCI = require('is-ci');
    // const reporter = require('cucumber-html-reporter');
    var reporter = require('cucumber-html-reporter');

exports.config = {
    baseUrl: 'https://euno.lms.doctustest.com/',
    chromeDriver: require(`chromedriver/lib/chromedriver`).path,
    SELENIUM_PROMISE_MANAGER: false,
    directConnect: true,
    allScriptsTimeout: 110000,
    framework:      'custom',
    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),
    // frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [ 'features/**/*.feature' ],

    serenity: {
        runner: 'cucumber',
        crew: [
            ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
            ConsoleReporter.forDarkTerminals(),
            Photographer.whoWill(TakePhotosOfInteractions),     // or Photographer.whoWill(TakePhotosOfFailures),
            new SerenityBDDReporter(),
        ]
    },

    onPrepare: function() {
        browser.waitForAngularEnabled(false);
    },

    cucumberOpts: {
        require: [ 'features/**/*.ts', ],
        'require-module':   [ 'ts-node/register'],
        'format': ["json:./reports/cucumber_report.json"],
        // tags:    ['@test'],
        strict:  false,
    },

    // -------------------

    onComplete: () => {
        const cucumberReporterOptions = {
            theme: 'bootstrap',
            jsonFile: './reports/cucumber_report.json',
            output: './reports/cucumber_reporter.html',
            output: process.cwd() + cucumberFile,
            reportSuiteAsScenarios: true
        }
        reporter.generate(cucumberReporterOptions);
    },

    // --------------

    capabilities: {
        browserName: 'chrome',
        loggingPrefs: {
            browser: 'SEVERE' // "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
        },

        chromeOptions: {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--disable-dev-shm-usage',
                '--disable-extensions',
                '--log-level=3',
                '--disable-gpu',
                '--window-size=1920,1080',
            ].concat(isCI ? ['--headless'] : [])    // run in headless mode on the CI server
        }
    }
};


/*
====================================================================
For full list of Protractor config options,
see- https://github.com/angular/protractor/blob/master/lib/config.ts
====================================================================
**/


