// import {defineSupportCode} from 'cucumber';
// import {expect, assert} from 'chai';
// import {browser, default as by, element} from "protractor";
const {Given, When, Then} = require('cucumber'),
    {expect} = require('chai'),
    {browser, by, element} = require('protractor');

Given('I go to {string}', function (site) {
    browser.get(site);
});

When('the page loads', function () {
    return element(by.css('.welcome-header')).getText();
});


Then('I reach Welcome to you bank account switch page', function () {
    element(by.css('.welcome-header')).getText().then(text => {
        console.log(`text for h1 = ${text}`);
        browser.driver.sleep(3000);
        expect(text).to.equal('Welcome to you bank account switch');
    });
});




