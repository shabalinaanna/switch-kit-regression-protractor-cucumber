const basePageObject = require('./base.page'),
    {ExpectedConditions} = require('protractor');

let WelcomeToYourAccountBankSwitchPageObject = Object.create(basePageObject, {
    provideOldBankName: {
        value: function (oldBankName) {
            console.log(`name of old bank = ${oldBankName}`);
            const input = element(by.css('input[name="origin_search_term"]')),
                listOfOptions = element(by.css('ul[role="listbox"]'));

            return input.sendKeys(oldBankName)
                .then(() => {
                    return browser.wait(ExpectedConditions.visibilityOf(listOfOptions), 3000);
                })
                .then(() => {
                    return listOfOptions.element(by.tagName('li')).click();
                });
        }
    },
    provideSignInInfoToOldBank: {
        value: function (inputLabel, value) {
            // browser.driver.sleep(3000);
            const input = element(by.xpath(`//label[contains(.,'${inputLabel}')]/following-sibling::input`));
            return browser.wait(ExpectedConditions.presenceOf(input), 3000)
                .then((isPresent) => {
                    console.log(`isPresent = ${isPresent}`);
                    return browser.wait(ExpectedConditions.elementToBeClickable(input), 3000);
                })
                .then((isClickable) => {
                    console.log(`isClickable = ${isClickable}`);
                    if (isClickable) {
                        return input.sendKeys(value);
                    }
                });
        }
    },
    agreeToFinReachTermsAndConditions: {
        value: function () {
            const customCheckbox = element(by.css('input#accept_terms_desktop+div.custom-checkbox'));
            return customCheckbox.click();
        }
    }
});

module.exports = WelcomeToYourAccountBankSwitchPageObject;