const basePageObject = require('./base.page'),
    {ExpectedConditions} = require('protractor'),
    {expect} = require('chai');


let accountImportPage = Object.create(basePageObject, {
    verifyProgressBarIsGone: {
        value: function () {
            const progressBar = element(by.css('div.progress-bar'));
            //fixme find a way to wait for progress bar to disappear
            return browser.wait(ExpectedConditions.stalenessOf(progressBar), 15000)
                .then(() => {
                    return expect(progressBar).to.not.exist;
                });
        }
    }
});

module.exports = accountImportPage;