exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:\\Users\\ELIEZER.CASTRO\\development\\kothe-modules-test\\app\\android\\app-release.apk',
      desiredCapabilities: {
        appPackage: 'br.com.kothe.kothe',
        appActivity: 'MainActivity',
        deviceName: 'emulator-5554',
        plataformVersion: '9'
      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/loginPage.js',
    homePage: './pages/homePage.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  //tests: './steps/*.test.js',
  name: 'kothe-modules-test'
}