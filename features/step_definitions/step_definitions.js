// features/step_definitions/browser_steps.js
var driver = require('selenium-webdriver');

var {defineSupportCode} = require('cucumber');

var expect = require("expect.js");

defineSupportCode(function({setDefaultTimeout, Given, When, Then}) {

    setDefaultTimeout(10 * 1000);

    Given('I am on the homepage', function() {

        return this.driver.get('http://localhost:4200/');
    });

    When('I click on {string}', function (text) {
        return this.driver.findElement({linkText: text}).then(function(element) {
            return element.click();
        });
    });

    Then('I should see {string}', function (text) {
        var xpath = "//*[contains(text(),'" + text + "')]";
        var condition = driver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 8000);
    });


    Given('I am on the {string} page', function(path) {
        return this.driver.get('http://localhost:4200/' + path);
    });

    Given('I am not logged in', function () {
        //ToDo: complete this step when we have users
    });

    When('I enter the {string} {string}', function (inputName, value) {

        return this.driver.findElement({name: inputName}).then(function(element) {
            element.clear();
            element.sendKeys(value);
            element.sendKeys(driver.Key.TAB);
        });
    });

    When('I submit the information', function () {

        this.driver.findElement({tagName: 'form'}).submit();
    });

    Then('The {string} page should be displayed', function (page) {
       //ToDo: fix this
        this.driver.getCurrentUrl().then(function (url) {
                console.log(url);
                expect(url).to.contain(page);
            });
    });

});
