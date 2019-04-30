const {Given, When, Then} = require('cucumber'),
    accountImportPage = require('../pages/account_import.page');

/******************* GIVENs **********************/

Given('progress bar is gone', function () {
    accountImportPage.verifyProgressBarIsGone();
});

/******************* WHENs and ANDs **********************/

When('click {string} link-button', function (buttonText) {
    accountImportPage.clickLinkButton(buttonText);
});

/******************* THENs **********************/
