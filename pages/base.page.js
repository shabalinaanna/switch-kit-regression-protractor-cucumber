const {expect} = require('chai');


const BasePage = function () {
    const baseUrl = 'dkb-dev.finreach.com/',
        username = 'dkb',
        password = 'gNT2MAfd';

    this.expect = expect;

    this.open = function (path = '') {
        return browser.get(`https://${username}:${password}@${baseUrl}${path}`);
    };

    this.clickButton = function (buttonText) {
        return element(by.buttonText(buttonText)).click();
    };

    this.clickLinkButton = function (linkText) {
        const link = element(by.partialLinkText(linkText));
        return browser.wait(ExpectedConditions.elementToBeClickable(link), 2000)
            .then(() => link.click());
    };

    this.verifyUrl = function (pagePath) {
        return waitForUrlToContain(pagePath)
            .then(isPathPresent => {
                console.log(`isPathPresent = ${isPathPresent}`);
                return browser.getCurrentUrl();
            })
            .then((currentUrl) => {
                    console.log(`currentUrl = ${currentUrl}, expectedUrl = https://${username}:${password}@${baseUrl}${pagePath}`);
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