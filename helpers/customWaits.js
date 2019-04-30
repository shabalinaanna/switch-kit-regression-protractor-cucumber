module.exports = {
    waitForUrlToContain: function (path) {
        return browser.wait(() => {
            return browser.getCurrentUrl()
                .then(url => {
                    return url.indexOf(path) > -1;
                })
        }, 3000)
    }
};