module.exports = function () {

    this.Given('I am on the target website', function () {
        return helpers.loadPage(page.target.url);
    });

    this.When(/^I click on "([^"]*)" link$/, function (objectKey) {
        return page.target.clickElement(objectKey);
    });

    this.Then(/^I should see "([^"]*)" page$/, function (objectKey) {
        return page.target.elementExists(objectKey);
    });
};
