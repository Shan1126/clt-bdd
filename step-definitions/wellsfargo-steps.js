const helpers = require("../runtime/helpers");

module.exports = function () {

    this.Given('I enter wellsfargo website', function () {
        return helpers.loadPage(page.wellsfargo.url);
    });

    this.When(/^I click on the link "([^"]*)"$/, function (keyword) {
        return page.wellsfargo.clickElement(keyword);
    });

    this.Then(/^I should see the "([^"]*)"$/, function (objectKey) {
        return page.wellsfargo.elementExists(objectKey);
    });
};
