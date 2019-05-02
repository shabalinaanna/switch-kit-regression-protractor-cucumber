module.exports = {
    waitForUrlToContain: function (path) {
        return browser.wait(() => {
            return browser.getCurrentUrl()
                .then(url => {
                    // console.log(`url from wait = ${url}`);
                    return url.indexOf(path) > -1;
                })
        }, 2000)
    }
};