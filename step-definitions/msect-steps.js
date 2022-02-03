module.exports = function () {

    this.Given('I am on Amazon website', function () {
        return helpers.loadPage(page.msect.url);  //here we use file name
    });
   
    this.When(/^I click section "([^"]*)"$/, function (objectKey) {
        return page.msect.clickElement(objectKey);
    });
 
    this.Then(/^I should see product "([^"]*)"$/, function (objectKey) {
        return page.msect.elementExists(objectKey);
    });

};

