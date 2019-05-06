const {Given, When, Then} = require('cucumber'),
    closeAccountPageObject = require('../pages/overview/close_account.page');

/******************* GIVENs **********************/
/******************* WHENs and ANDs **********************/

/******************* THENs **********************/

Then('I can see message that my request to close account has been received', function () {
    return closeAccountPageObject.verifyConfirmationMessage();
});
