module.exports = function () {

    this.Given('I am on the Jootza portal', function () {
        return helpers.loadPage(page.jootza.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.jootza.clickElement(objectKey);
    });

    this.When(/^I enter username "([^"]*)"$/ , function(objKey1) {
        return page.jootza.inputUserName(objKey1);
    });

    this.When(/^I enter password "([^"]*)"$/, function(objKey1) {
        return page.jootza.inputPassword(objKey1);
    });
    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.jootza.elementExists(objectKey);
    });


    this.Given(/^I am logged on to the Jootza portal as "([^"]*)"$/, function (user) {
        return page.jootza.loginPortal(user);
    });

    this.Then(/^I should see the approver name as "([^"]*)"$/, function (value) {
        return page.jootza.verifyApproverName(value);
    });

};
