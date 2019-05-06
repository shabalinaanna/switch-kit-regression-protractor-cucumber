const {Given, When, Then} = require('cucumber'),
    overviewPageObject = require('../pages/overview/overview.page');

/******************* GIVENs **********************/

/******************* WHENs and ANDs **********************/
When('I sign with mouse', {timeout: 10 * 1000}, function () {
    return overviewPageObject.signWithMouse();
});

When('I fill out creditor info as {string} {int} {string}', function (company, postcode, city) {
    overviewPageObject.fillCreditorInfo(company, postcode, city);
});

When('when I confirm online banking PIN and iTAN as {string} and click {string} button', function (pin, buttonText) {
    return overviewPageObject.confirmOnlineBankingPINAndClickButton(pin, buttonText);
});

/******************* THENs **********************/
