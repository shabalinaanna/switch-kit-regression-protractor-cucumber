const {Given, When, Then} = require('cucumber'),
    {expect} = require('chai');

Then('I am on {string} page', function (pageTitle) {
    browser.driver.sleep(3000);
    return element(by.tagName('h1')).getText().then(text => {
        console.log(`text for h1 = ${text}`);
        expect(text).to.equal(pageTitle);
    })
});

Then('I wait', function () {
    browser.driver.sleep(3000);
});
