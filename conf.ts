import {Config, browser} from 'protractor';

export let config: Config = {
    //Check the "app-root" for angular applications
    rootElement: 'app',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 11000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['incognito']
        }
      },
    maxSessions: 1,
    noGlobals: true,
    onPrepare: () => {
        browser.driver.manage().window().setSize(1400, 900);
    },
    // Base Url in SBX
    baseUrl: 'http://demo.testfire.net/',
    specs: ['../features/**/*.feature'],
    cucumberOpts: {
        require: 'step_definitions/*.js',
        format: ['progress'],
        'format-options':  '{"colorsEnabled": true}'
    }
};

