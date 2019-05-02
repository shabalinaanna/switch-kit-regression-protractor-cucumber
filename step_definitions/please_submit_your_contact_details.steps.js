const {Given, When, Then} = require('cucumber'),
    pleaseSubmitYourContactDetailsPageObject = require('../pages/please_submit_your_contact_details.page');

/******************* GIVENs **********************/

/******************* WHENs and ANDs **********************/
When('I fill out details form by adding query params to url', function () {
    return pleaseSubmitYourContactDetailsPageObject.apendParams('?demo_user=finreach');
});

/******************* THENs **********************/
