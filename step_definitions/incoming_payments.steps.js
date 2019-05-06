const {Given, When, Then} = require('cucumber'),
    incomingPaymentsPageObject = require('../pages/overview/incoming_payments.page');

/******************* GIVENs **********************/
Given('I have recurring incoming payments', function () {
    return incomingPaymentsPageObject.verifyPaymentsArePresent();
});

/******************* WHENs and ANDs **********************/
When('I click Notify for {optionalString} incoming payment', function (paymentName) {
    return incomingPaymentsPageObject.notifyIncomingPayment(paymentName);
});

/******************* THENs **********************/
Then('in Transferred section I can see the payment with name {string}', function (transferredPaymentName) {
    return incomingPaymentsPageObject.verifyPaymentHasBeenTransferred(transferredPaymentName);
});
