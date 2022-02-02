module.exports = function () {

    this.Given('I am at pranascience portal', function () {
        return helpers.loadPage(page.pranaScience.url);
    });
    this.When(/^I click "([^"]*)"$/, function (objectKey) {
        return page.pranaScience.clickElement(objectKey);
    });
    this.When(/^I enter "([^"]*)" "([^"]*)"$/, function (objectKey) {
        return page.pranaScience.inputTextBoxData(objectKey);
    });
    this.When(/^I select "([^"]*)" "([^"]*)"$/, function (objectKey) {
        return page.pranaScience.selectDropDown(objectKey);
    });
    this.Then(/^I want to see "([^"]*)"$/, function (objectKey) {
        return page.pranaScience.elementExists(objectKey);
    });
};