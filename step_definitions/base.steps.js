const {Given, When, Then, defineParameterType} = require('cucumber'),
    basePage = require('../pages/base.page');

defineParameterType({
    name: "optionalString",
    regexp: /\(\w*\)/,
    transformer: (str) => str.replace(/\(|\)/gi, "")
});

/******************* GIVENs **********************/
Given('I go to {string} page', function (path) {
    return basePage.open(path);
});

/******************* WHENs and ANDs **********************/

When('(I )click {string} button', function (buttonText) {
    return basePage.clickButton(buttonText);
});


When('(I )click {string} link-button', function (buttonText) {
    return basePage.clickLinkButton(buttonText);
});

/******************* THENs **********************/

Then('I am on {string} page', function (pagePath) {
    return basePage.verifyUrl(pagePath);
});

// Then(/I am on '(\w+(\/\w*)?)' page/, function (pagePath) {
//     return basePage.verifyUrl(pagePath);
// });


Then('I wait', function () {
    return browser.driver.sleep(4500);
});


