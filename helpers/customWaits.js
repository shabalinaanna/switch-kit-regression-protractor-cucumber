module.exports = {
    waitForUrlToContain: function (path) {
        return browser.wait(() => {
            return browser.getCurrentUrl()
                .then(url => {
                    // console.log(`url from wait = ${url}`);
                    return url.indexOf(path) > -1;
                })
        }, 2000)
    },
    waitForAllElementsInArray: function (elementArrayFinder) {
        return browser.wait(() => {
            return elementArrayFinder.count()
                .then(count => {
                    console.log(`count = ${count}`);
                    return count > 0 ? count : 'nothing';
                })
        }, 4000);
    }
};