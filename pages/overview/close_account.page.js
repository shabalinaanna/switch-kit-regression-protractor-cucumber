const overviewPageObject = require('./overview.page'),
    closeAccountPageObject = Object.create(overviewPageObject, {
        verifyConfirmationMessage: {
            value: function () {
                const confirmationMessageContainer = element(by.tagName('h2')),
                    confirmationMessage = "We have received your request to close your account";
                return confirmationMessageContainer.getText()
                    .then(text => {
                        return this.expect(text).to.equal(confirmationMessage);
                    })
            }
        }
    });

module.exports = closeAccountPageObject;