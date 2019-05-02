const basePageObject = require('./base.page'),
    {ExpectedConditions} = require('protractor');


let accountImportPageObject = Object.create(basePageObject, {
    verifyProgressBarIsGone: {
        value: function () {
            const progressBar = element(by.css('div.progress-bar'));
            //fixme find a way to wait for progress bar to disappear
            // return browser.wait(ExpectedConditions.presenceOf(element(by.partialLinkText('Next'))), 60000)
            //     .then(() => {
            //         console.log('waited long enough');
            //         // expect(progressBar).to.not.exist;
            //         return accountImportPage.clickLinkButton('Next');
            //     });

            return browser.wait(ExpectedConditions.stalenessOf(progressBar), 60 * 1000)
                .then(() => {
                    console.log('waited long enough');
                });
        }
    }
});

module.exports = accountImportPageObject;