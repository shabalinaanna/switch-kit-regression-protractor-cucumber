const BasePage = function () {
    this.open = function (path = '') {
        browser.get("https://dkb:gNT2MAfd@dkb-dev.finreach.com/" + path);
    }
};

module.exports = new BasePage();