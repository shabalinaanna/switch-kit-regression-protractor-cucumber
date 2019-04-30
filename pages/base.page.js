const {expect} = require('chai');


const BasePage = function () {
    const baseUrl = 'dkb-dev.finreach.com/',
        username = 'dkb',
        password = 'gNT2MAfd';

    this.open = function (path = '') {
        browser.get(`https://${username}:${password}@${baseUrl}${path}`);
    };

    this.clickButton = function (buttonText) {
        return element(by.buttonText(buttonText)).click();
    };

    this.verifyUrl = function (pagePath) {
        return waitForUrlToContain(pagePath)
            .then(isPathPresent => {
                console.log(`isPathPresent = ${isPathPresent}`);
                return browser.getCurrentUrl();
            })
            .then((currentUrl) => {
                    console.log(`currentUrl = ${currentUrl}`);
                    return expect(currentUrl).to.equal(`https://${username}:${password}@${baseUrl}${pagePath}`)
                }
            );
    }
};

module.exports = new BasePage();