const overviewPageObject = require('./overview.page'),
    balanceTransferPageObject = Object.create(overviewPageObject, {
        maxAllowedValue: {
            value: "1000,00"
        },
        verifyMaxAllowedTransferAmount: {
            value: function () {
                return element(by.css('[name=amount_text]')).getAttribute('value')
                    .then(value => {
                        return this.expect(value).to.equal(this.maxAllowedValue);
                    })
            }
        },
        verifyBalanceSuccessfullyTransferred: {
            value: function () {
                const transferWasSuccessfullyPlacedMessage = "The transfer was successfully placed";
                return this.verifyOperationCompletedSuccessfully()
                    .then(successMessage => {
                        return this.expect(successMessage).to.equal(transferWasSuccessfullyPlacedMessage);
                    })
            }
        }
    });


module.exports = balanceTransferPageObject;