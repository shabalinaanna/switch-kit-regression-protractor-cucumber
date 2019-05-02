const basePageObject = require('./base.page'),
    {ExpectedConditions} = require('protractor');

const directDebitsPageObject = Object.create(basePageObject, {
    signWithMouse: {
        value: function () {
            const signWithMouseTab = element(by.id('manual-signature-tab')),
                signWithMouseCanvas = element(by.id('signature-box'));
            return browser.wait(ExpectedConditions.elementToBeClickable(signWithMouseTab), 2000)
                .then(() => {
                    return signWithMouseTab.click();
                })
                .then(() => {
                    return browser.wait(ExpectedConditions.visibilityOf(signWithMouseCanvas), 2000);
                })
                .then(() => {
                    return signWithMouseCanvas.click()
                })
                .then(() => {
                    return browser.executeScript(
                        `const canvas = document.getElementById(arguments[0].id);
                        const context = canvas.getContext('2d');
                        context.beginPath();
                        context.moveTo(50,50);
                        context.lineTo(300,150);
                        context.stroke();
                        `, signWithMouseCanvas
                    )
                })
                .then(() => {
                    console.log('signed doc');
                    return this.clickButton('Notify All');
                })
        }
    },
    verifyNoIdentifiedCreditorsInDirectDebitsPage: {
        value: function () {
            return element.all(by.repeater('mandate in mandates.to_transfer_letter'))
                .then(items => {
                    console.log(`items.length = ${items.length}`);
                    return this.expect(items.length).to.equal(0);
                });
        }
    }
});

module.exports = directDebitsPageObject;