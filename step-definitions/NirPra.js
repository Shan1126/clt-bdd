module.exports = function () {
    this.Given('I am on the pranascience portal', function () {
        return helpers.loadPage(page.NirPra.url);
    });
    this.When(/^I enter First name "([^"]*)"$/ , function (objectKey) {
        return page.NirPra.inputUserName(objectKey);
    });
    this.Then(/^corresponing page should be opened "([^"]*)"$/, function (objectKey) {
        // Write code here that turns the phrase above into concrete actions
        return helpers.loadPage(page.NirPra.abc1);
    });
    this.Then(/^ the corresponding "([^"]*)"$ are entered/, function (objKey1) {
        return page.NirFacebook.inputUserName(objKey1);
    });
    this.When(/^I Click on "([^"]*)"$/, function (objectKey) {
        return page.NirPra.clickElement(objectKey);
    });
};