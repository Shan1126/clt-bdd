

module.exports = function () {

    this.Given('I am on the Yahoo portal', function () {
        return helpers.loadPage(page.yahoomail.url);
    });

    this.When(/^I click in "([^"]*)"$/, function (objectKey) {
        return page.yahoomail.clickElement(objectKey);
    });

    this.When(/^Give username "([^"]*)"$/, function (objKey1) {
        return page.yahoomail.inputUserName(objKey1);
    });

    this.When(/^I click  "([^"]*)"$/, function (objectKey) {
        return page.yahoomail.clickElement(objectKey);
    });
    this.Then(/^Screen should display "([^"]*)"$/, function (objectKey) {
        return page.yahoomail.elementExists(objectKey);
    });
};

