// features/step_definitions/browser_steps.js
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({setDefaultTimeout, Given, When, Then}) {

    setDefaultTimeout(60 * 1000);

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
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 8000);
    });
});

// var myStepDefinitionsWrapper = function () {
//
//     When('I click on {string}', function (text) {
//
//     });
// };
// module.exports = myStepDefinitionsWrapper;