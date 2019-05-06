const basePageObject = require('../base.page'),
    {ExpectedConditions} = require('protractor'),

    overviewPageObject = Object.create(basePageObject, {
        signWithMouse: {
            value: function () {
                const signWithMouseTab = element(by.id('manual-signature-tab')),
                    signWithMouseCanvas = element(by.id('signature-box'));
                browser.sleep(2000);
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
                        return this.submit();
                    })
            }
        },
        fillCreditorInfo: {
            value: function (company, postcode, city) {
                return element(by.id('creditor_name')).sendKeys(company)
                    .then(() => element(by.id('creditor_address_postal_code')).sendKeys(postcode))
                    .then(() => element(by.id('creditor_address_city')).sendKeys(city))
            }
        },
        confirmOnlineBankingPINAndClickButton: {
            value: function (pin, buttonText) {
                const pinInput = element(by.id('pin')),
                    itanInput = element(by.name('tan_field'));
                return browser.wait(ExpectedConditions.elementToBeClickable(pinInput), 2000)
                    .then(() => pinInput.sendKeys(pin))
                    .then(() => this.clickLinkButton(buttonText))
                    .then(() => {
                        browser.wait(ExpectedConditions.elementToBeClickable(itanInput), 3000);
                        return itanInput.sendKeys(pin);
                    })
                    .then(() => this.clickLinkButton(buttonText));
            }
        },
        verifyOperationCompletedSuccessfully: {
            value: function () {
                const messageContainer = element(by.css('.tan-finished'));

                return browser.wait(ExpectedConditions.presenceOf(messageContainer), 2000)
                    .then(() => messageContainer.getText());
            }
        }
    });

module.exports = overviewPageObject;