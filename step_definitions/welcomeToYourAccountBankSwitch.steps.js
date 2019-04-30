const {Given, When, Then} = require('cucumber'),
    welcomeToYourAccountSwitchPage = require('../pages/welcomeToYourAccountBankSwitch.page');

When('I provide name of my old bank as {string}', function (oldBankName) {
    return welcomeToYourAccountSwitchPage.provideOldBankName(oldBankName);
});


When('I provide {string} as {string}', function (inputLabel, value) {
    return welcomeToYourAccountSwitchPage.provideSignInInfoToOldBank(inputLabel, value);
});

When('I agree to FinReach GmbH terms and conditions', function () {
    return welcomeToYourAccountSwitchPage.agreeToFinReachTermsAndConditions();
});
