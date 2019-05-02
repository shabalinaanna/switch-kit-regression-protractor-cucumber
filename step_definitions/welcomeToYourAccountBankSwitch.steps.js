const {Given, When, Then} = require('cucumber'),
    WelcomeToYourAccountBankSwitchPageObject = require('../pages/welcomeToYourAccountBankSwitch.page');

When('I provide name of my old bank as {string}', function (oldBankName) {
    return WelcomeToYourAccountBankSwitchPageObject.provideOldBankName(oldBankName);
});


When('I provide {string} as {string}', function (inputLabel, value) {
    return WelcomeToYourAccountBankSwitchPageObject.provideSignInInfoToOldBank(inputLabel, value);
});

When('I agree to FinReach GmbH terms and conditions', function () {
    return WelcomeToYourAccountBankSwitchPageObject.agreeToFinReachTermsAndConditions();
});
