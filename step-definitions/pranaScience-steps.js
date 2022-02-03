module.exports = function () {

    this.Given('I am at pranascience portal', function () {
        return helpers.loadPage(page.pranaScience.url);
    });
    this.When(/^I press "([^"]*)"$/, function (objectKey) {
        return page.pranaScience.clickElement(objectKey);
    });
    this.When(/^I enter "([^"]*)" "([^"]*)"$/, function (eleName, objKey) {
        return page.pranaScience.inputTextBoxData(eleName, objKey);
    });
    this.When(/^I select "([^"]*)" "([^"]*)"$/, function (eleName,objKey1) {
        return page.pranaScience.selectDropDown(eleName, objKey1);
    });
    this.Then(/^I want to see "([^"]*)"$/, function (objectKey) {
        return page.pranaScience.elementExists(objectKey);
    });
};