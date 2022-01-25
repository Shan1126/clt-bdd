module.exports = function () {

    this.Given('I am on the Target portal', function () {
        return helpers.loadPage(page.target.url);
    });

   this.When(/^I click on target "([^"]*)"$/, function (objectKey) {
        return page.target.clickElement(objectKey);
    });

    this.Then(/^I should see target "([^"]*)"$/, function (objectKey) {
        return page.target.elementExists(objectKey);
    });
};
