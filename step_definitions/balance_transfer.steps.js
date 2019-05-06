const {Given, When, Then} = require('cucumber'),
    balanceTransferPageObject = require('../pages/overview/balance_transfer.page');

/******************* GIVENs **********************/

Given('I verify max transfer value', function () {
    return balanceTransferPageObject.verifyMaxAllowedTransferAmount();
});

/******************* WHENs and ANDs **********************/
/******************* THENs **********************/
Then('I see message that transfer has been successfully placed', function () {
    return balanceTransferPageObject.verifyBalanceSuccessfullyTransferred();
});
