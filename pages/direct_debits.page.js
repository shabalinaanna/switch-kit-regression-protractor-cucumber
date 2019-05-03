const overviewPageObject = require('./overview.page'),
    {ExpectedConditions} = require('protractor');

const directDebitsPageObject = Object.create(overviewPageObject, {
    verifyNoIdentifiedCreditorsInDirectDebitsPage: {
        value: function () {
            return element.all(by.repeater('mandate in mandates.to_transfer_letter'))
                .then(items => {
                    console.log(`items.length = ${items.length}`);
                    return this.expect(items.length).to.equal(0);
                });
        }
    },
    notifyUnknownCreditor: {
        value: function (creditorNumberInList) {
            const unknownCreditorsList = element.all(by.repeater('mandate in mandates.to_transfer_unknown')),
                targetCreditor = unknownCreditorsList.get(creditorNumberInList - 1);
            return browser.wait(ExpectedConditions.presenceOf(targetCreditor), 3000)
                .then(() => {
                    targetCreditor.element(by.partialLinkText('Notify')).click();
                });
        }
    },
    clickRadioButton: {
        value: function (buttonText) {
            return element(by.xpath(`//ul[@class='matched-creditors']/li[contains(.,'${buttonText}')]`)).click();
        }
    },
    fillCreditorInfo: {
        value: function (company, postcode, city) {
            return element(by.id('creditor_name')).sendKeys(company)
                .then(() => element(by.id('creditor_address_postal_code')).sendKeys(postcode))
                .then(() => element(by.id('creditor_address_city')).sendKeys(city))
        }
    }
});

module.exports = directDebitsPageObject;