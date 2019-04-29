const basePageObject = require('./base.page'),
    {Key} = require('protractor');

let WelcomeToYourAccountBankSwitchPage = Object.create(basePageObject, {
    provideOldBankName: {
        value: function (oldBankName) {
            console.log(`name of old bank = ${oldBankName}`);
            const input = element(by.css('input[name="origin_search_term"]'));
            input.sendKeys(oldBankName);
            //todo fixme!!! find a way to click enter or select 1st item from list
            return input.sendKeys(Key.ENTER);
            browser.sleep(3000);
        }
    },
    provideSignInInfoToOldBank: {
        value: function (inputLabel, value) {
            return element(by.xpath(`//label[contains(.,${inputLabel})]`)).sendKeys(value);
        }
    }
});

module.exports = WelcomeToYourAccountBankSwitchPage;