const {Given, When, Then} = require('cucumber'),
    standingOrdersPageObject = require('../pages/standing_orders.page.page');

/******************* GIVENs **********************/

/******************* WHENs and ANDs **********************/
When('I click Deactivate for( {string}) standing order', function (name) {
    return standingOrdersPageObject.deactivateStandingOrder(name);
});

/******************* THENs **********************/
Then('I have {int} steps there to complete the transfer', function (int) {
    return standingOrdersPageObject.verifyNumberOfStepsToComplete(int);
});

