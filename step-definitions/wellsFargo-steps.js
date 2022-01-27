module.exports = function () {

    this.Given('I am on wellsFargo portal', function () {
        return helpers.loadPage(page.wellsFargo.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.wellsFargo.clickElement(objectKey);
    });

   
    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.wellsFargo.elementExists(objectKey);
    });
};


 
