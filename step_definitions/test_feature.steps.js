const {Given, When, Then} = require('cucumber'),
    {browser, by, element} = require('protractor'),
    welcomeToAccountSwitchPage = require('../pages/welcomeToYourAccountBankSwitch.page');

Given('I go to start page', function () {
    welcomeToAccountSwitchPage.open();
});

When('the page loads', function () {
    return element(by.css('.welcome-header')).getText();
});

// Then('I am on {string} page', function (pageTitle) {
//     browser.driver.sleep(3000);
//     return element(by.css('.welcome-header')).getText().then(text => {
//         console.log(`text for h1 = ${text}`);
//         expect(text).to.equal(pageTitle);
//     })
// });


