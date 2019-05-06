const {Given, When, Then} = require('cucumber'),
    standingOrdersPageObject = require('../pages/overview/standing_orders.page');

/******************* GIVENs **********************/

/******************* WHENs and ANDs **********************/
When('I click Deactivate for {optionalString} standing order', function (name) {
    return standingOrdersPageObject.deactivateStandingOrder(name);
});

/******************* THENs **********************/
Then('I have {int} step(s) there to complete the transfer', function (int) {
    return standingOrdersPageObject.verifyNumberOfStepsToComplete(int);
});

Then('I can see details of standing order', function (detailsArray) {
    return standingOrdersPageObject.verifyStandingOrderDetails(detailsArray);
});

Then('I see message that standing order has been successfully canceled', function () {
    return standingOrdersPageObject.verifyStandingOrderCanceledSuccessfully();
});
