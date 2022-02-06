module.exports = function () {


    this.Given('want to visit science.org', function () {
        return helpers.loadPage(page.science.url);  
    });


    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.science.clickElement(objectKey);
    });


    this.Then('news page should be opened', function () {
        return helpers.loadPage(page.science.url1);  
    });


}