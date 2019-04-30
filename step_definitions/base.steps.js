const {Given, When, Then} = require('cucumber'),
    basePage = require('../pages/base.page');

/******************* GIVENs **********************/

/******************* WHENs and ANDs **********************/

When('click {string} button', function (buttonText) {
    return basePage.clickButton(buttonText);
});


/******************* THENs **********************/

Then('I am on {string} page', function (pagePath) {
    return basePage.verifyUrl(pagePath);
});

Then('I wait', function () {
    return browser.driver.sleep(3000);
});


