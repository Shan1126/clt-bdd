module.exports = function () {

    this.Given('I am on the Jootza portal', function () {
        return helpers.loadPage(page.jootza.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.jootza.clickElement(objectKey);
    });

    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.jootza.elementExists(objectKey);
    });
};
