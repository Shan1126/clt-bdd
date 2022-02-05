module.exports = function () {

    this.Given('I navigate Pranascience portal', function () {
        return helpers.loadPage(page.pranaScience.url);
    });
    this.When(/^I press "([^"]*)"$/, function (objectKey) {
        return page.pranaScience.clickElement(objectKey);
    });
    this.When(/^I enter "([^"]*)" "([^"]*)"$/, function (eleName, objKey) {
        return page.pranaScience.inputTextBoxData(eleName, objKey);
    });
    this.When(/^Select option"([^"]*)" "([^"]*)"$/, function (eleName,objKey1) {
        return page.pranaScience.selectDropDown(eleName, objKey1);
    });
    this.Then(/^The page displays "([^"]*)"$/, function (objectKey) {
        return page.pranaScience.elementExists(objectKey);
    });
};