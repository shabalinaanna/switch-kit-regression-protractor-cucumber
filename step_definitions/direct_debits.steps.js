const {Given, When, Then} = require('cucumber'),
    directDebitsPageObject = require('../pages/overview/direct_debits.page');

/******************* GIVENs **********************/

/******************* WHENs and ANDs **********************/
// When('I sign with mouse', {timeout: 10 * 1000}, function () {
//     return directDebitsPageObject.signWithMouse();
// });

When('I click Notify for the {int}st company in Unknown Creditors section', {timeout: 10 * 1000}, function (creditorNumber) {
    return directDebitsPageObject.notifyUnknownCreditor(creditorNumber);
});

When('I click {string} radio button', function (buttonText) {
    return directDebitsPageObject.clickRadioButton(buttonText);
});

// When('I fill out creditor info as {string} {int} {string}', function (company, postcode, city) {
//     directDebitsPageObject.fillCreditorInfo(company, postcode, city);
// });

/******************* THENs **********************/
Then('I verify that there are no identified creditors in my Direct Debits list', function () {
    return directDebitsPageObject.verifyNoIdentifiedCreditorsInDirectDebitsPage();
});



