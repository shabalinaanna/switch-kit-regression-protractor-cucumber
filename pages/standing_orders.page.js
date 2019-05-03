const overviewPage = require('./overview.page'),
    standingOrdersPageObject = Object.create(overviewPage, {
        deactivateStandingOrder: {
            value: function (name) {
                let targetOrder = name ? element(by.xpath(`//div[contains(@class,'standing-order-row') and contains(.,'${name}')]`)) : element.all(by.xpath(`//div[contains(@class,'standing-order-row')`)).first();
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
        }
    });