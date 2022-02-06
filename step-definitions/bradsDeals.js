const helpers = require("../runtime/helpers");

module.exports = function () {

    this.Given('I am in BradsDeals HomePage', function () {
        return helpers.loadPage(page.bradsDeals.url);
    });
    this.When(/^I scroll down to "([^"]*)"$/, function (objectKey) {
        console.log("objKey"+objectKey);
        return page.bradsDeals.clickElement(objectKey);
        //return helpers.scrollToElement('//*[@id="udemy"]/div[2]/div[3]/div[5]/div/section/h2');
    });
    this.Then(/^I should see header "([^"]*)"$/, function (objectKey) {
        return page.bradsDeals.elementExists(objectKey);
    });
};