const {Given, When, Then} = require('cucumber'),
    directDebitsPageObject = require('../pages/direct_debits.page');


/******************* GIVENs **********************/

/******************* WHENs and ANDs **********************/
When('I sign with mouse', {timeout: 10 * 1000}, function () {
    return directDebitsPageObject.signWithMouse();
});

/******************* THENs **********************/
Then('I verify that there are no identified creditors in my Direct Debits list', function () {
    return directDebitsPageObject.verifyNoIdentifiedCreditorsInDirectDebitsPage();
});
