const {expect} = require('chai');


const BasePage = function () {
    const baseUrl = 'dkb-dev.finreach.com/',
        username = 'dkb',
        password = 'gNT2MAfd';

    this.open = function (path = '') {
        return browser.get(`https://${username}:${password}@${baseUrl}${path}`)
            .then(() => {
                browser.driver.sleep(2000)
            });
    };

    this.clickButton = function (buttonText) {
        return element(by.buttonText(buttonText)).click();
    };

    this.clickLinkButton = function (linkText) {
        return element(by.partialLinkText(linkText)).click();
    };

    this.verifyUrl = function (pagePath) {
        return waitForUrlToContain(pagePath)
            .then(isPathPresent => {
                console.log(`isPathPresent = ${isPathPresent}`);
                return browser.getCurrentUrl();
            })
            .then((currentUrl) => {
                    console.log(`currentUrl = ${currentUrl}, expectedUrl = https://${username}:${password}@${baseUrl}${pagePath}`);
                    browser.driver.sleep(3000);
                    return expect(currentUrl).to.equal(`https://${username}:${password}@${baseUrl}${pagePath}`)
                }
            );
    };

    this.apendParams = function (queryParams) {
        return browser.getCurrentUrl()
            .then(currentUrl => {
                return browser.get(currentUrl + queryParams);
            })
            .then(() => element(by.css('input[type=submit]')).click());
    }
};

module.exports = new BasePage();