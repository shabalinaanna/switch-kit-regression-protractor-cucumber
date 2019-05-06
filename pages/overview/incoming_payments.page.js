const overviewPageObject = require('./overview.page'),
    incomingPaymentsPageObject = Object.create(overviewPageObject, {
        verifyPaymentsArePresent: {
            value: function () {
                //todo: fix me with more elegant wait
                browser.sleep(2000);
                return element.all(by.repeater("mandate in mandates.credit_multiple")).count()
                    .then(count => {
                        console.log(`found ${count} incoming payments`);
                        try {
                            return this.expect(count).to.not.equal(0);
                        } catch (e) {
                            throw new Error("Cannot proceed with test as there are no Incoming Payments to test.");
                        }
                    })
            }
        },
        notifyIncomingPayment: {
            value: function (name) {
                let targetPayment = name ? element(by.xpath(`//div[contains(@class, 'mandate-wrap') and contains(.,'${name}')]`)) : element.all(by.xpath(`//div[contains(@class, 'mandate-wrap')]`)).first();
                return targetPayment.element(by.partialLinkText('Notify')).click();
            }
        },
        verifyPaymentHasBeenTransferred: {
            value: function (transferredPaymentName) {
                //todo: use here that fancy wait that waits for all elements in array to be present
                let mandatesTransferred = element.all(by.repeater('mandate in mandates.transferred'));
                return mandatesTransferred.filter((mandate => {
                    return mandate.getText().then(text => {
                        return text.indexOf(transferredPaymentName) > -1;
                    })
                }))
                    .then(el => {
                        return this.expect(el.length).to.equal(1);
                    });
            }
        }
    });

module.exports = incomingPaymentsPageObject;