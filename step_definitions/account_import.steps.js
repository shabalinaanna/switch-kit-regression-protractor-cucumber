const {Given, When, Then} = require('cucumber'),
    accountImportPageObject = require('../pages/account_import.page');

/******************* GIVENs **********************/

Given('progress bar is gone', {timeout: 60 * 1000}, function () {
    return accountImportPageObject.verifyProgressBarIsGone();
});

/******************* WHENs and ANDs **********************/


/******************* THENs **********************/
