const {Given, When, Then} = require('cucumber'),
    basePage = require('../pages/base.page');

/******************* GIVENs **********************/
Given('I go to {string} page', function (path) {
    return basePage.open(path);
});

/******************* WHENs and ANDs **********************/

When('click {string} button', function (buttonText) {
    return basePage.clickButton(buttonText);
});


When('(I )click {string} link-button', function (buttonText) {
    return basePage.clickLinkButton(buttonText);
});

/******************* THENs **********************/

Then('I am on {string} page', function (pagePath) {
    return basePage.verifyUrl(pagePath);
});

Then('I wait', function () {
    return browser.driver.sleep(3000);
});


