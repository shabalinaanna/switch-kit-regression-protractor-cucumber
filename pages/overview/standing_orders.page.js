const overviewPage = require('./overview.page'),
    {ExpectedConditions} = require('protractor'),

    standingOrdersPageObject = Object.create(overviewPage, {
        deactivateStandingOrder: {
            value: function (name) {
                console.log(`optionalName = ${name}`);
                let targetOrder = name ? element(by.xpath(`//div[contains(@class,'standing-order-row') and contains(.,'${name}')]`)) : element.all(by.xpath(`//div[contains(@class,'standing-order-row')]`)).first();
                return targetOrder.element(by.xpath("//a[contains(.,'Deactivate')]")).click();
            }
        },
        verifyNumberOfStepsToComplete: {
            value: function (expectedNumberOfSteps) {
                return element.all(by.css('span[class*=step-number]')).count()
                    .then(count => {
                        return this.expect(count).to.equal(expectedNumberOfSteps);
                    })
            }
        },
        verifyStandingOrderDetails: {
            value: function (detailsArray) {
                const detailsKeys = ["Beneficiary", "IBAN", "Amount", "Next execution date", "Interval", "Description"],
                    details = element(by.tagName('dl'));
                return element(by.tagName('dl')).getText()
                    .then(text => {
                        console.log(`text from dl = ${text},
                        formated text = ${text.replace(/:\n/g, ": ")}`);
                        //todo finish this!!!
                    })
            }
        },
        verifyStandingOrderCanceledSuccessfully: {
            value: function () {
                const standingOrderCanceledMessage = "The standing order has successfully been canceled";

                return this.verifyOperationCompletedSuccessfully()
                    .then(successMessage => {
                        return expect(successMessage).to.equal(standingOrderCanceledMessage);
                    })
            }
        }
    });

module.exports = standingOrdersPageObject;