const {Given, When, Then} = require('cucumber'),
    {browser, by, element} = require('protractor'),
    welcomeToAccountSwitchPage = require('../pages/welcomeToYourAccountBankSwitch.page');

Given('I go to start page', function () {
    welcomeToAccountSwitchPage.open();
});

When('the page loads', function () {
    return element(by.css('.welcome-header')).getText();
});


