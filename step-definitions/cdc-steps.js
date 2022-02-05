module.exports = function () {

    this.Given('I am on the cdc portal', function () {
        return helpers.loadPage(page.cdc.url);
    });

   this.When(/^I click on cdc "([^"]*)"$/, function (objectKey) {
        return page.cdc.clickElement(objectKey);
    });

    this.Then(/^I should see cdc "([^"]*)"$/, function (objectKey) {
        return page.cdc.elementExists(objectKey);
    });
};
