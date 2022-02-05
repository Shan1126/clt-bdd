const helpers = require("../runtime/helpers");

module.exports = function () {

    this.Given('Student is at college board portal', function () {
        return helpers.loadPage(page.collegeBoard.url);
    });
    this.When(/^Clicks "([^"]*)"$/, function (objectKey) {
        return page.collegeBoard.clickElement(objectKey);
    });
    this.When('Scrolldown to bottom of page', function () {
        return page.collegeBoard.scrollToPageBottom();
    });
    this.When(/^Select option "([^"]*)"$/, function (objectKey) {
        return page.collegeBoard.selectOption(objectKey);
    });
    this.When(/^Enter "([^"]*)" "([^"]*)"$/, function (eleName, objKey1) {
        return page.collegeBoard.inputTextBoxData(eleName, objKey1);
    });
    this.Then(/^Verify "([^"]*)"$/, function (objectKey) {
        return page.collegeBoard.elementExists(objectKey);
    });
};