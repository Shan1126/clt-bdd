module.exports = function () {

    this.Given('I am on wfCustomerService portal', function () {
        return helpers.loadPage(page.wfCustomerService.wfUrl);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.wfCustomerService.clickElement(objectKey);
    });

   
    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.wfCustomerService.elementExists(objectKey);
    });
};


 