module.exports = function () {

    this.Given('I navigate to pranascience website', function () {
        return helpers.loadPage(page.pranaScience.url);
    });

    this.When(/^I click pranaRegister "([^"]*)"$/, function (objectKey) {
        return page.pranaScience.clickElement(objectKey);
    });

    this.When(/^Enter  pranaUsername "([^"]*)"$/, function (objKey1) {
        return page.pranaScience.inputUserName(objKey1);
    });

    this.When(/^Enter  pranaEmail "([^"]*)"$/, function (objectKey) {
        return page.pranaScience.inputEmail(objectKey);
    });
    this.When(/^Enter  pranaPassword "([^"]*)"$/, function (objectKey) {
        return page.pranaScience.inputPassword(objectKey);
    });
    this.When(/^Confirm repranaPassword "([^"]*)"$/, function (objectKey) {
        return page.pranaScience.inputConfirmpassword(objectKey);
    });
    this.Then(/^Click the register  "([^"]*)"$/, function (objectKey) {
        return page.pranaScience.clickElement(objectKey);
    });
};