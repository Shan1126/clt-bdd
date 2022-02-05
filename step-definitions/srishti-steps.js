module.exports = function () {

    this.Given('I am at srishtiusa portal', function () {
        return helpers.loadPage(page.srishti.url); 
    });

    this.When(/^I click "([^"]*)"$/, function (objectKey) {
        return page.srishti.clickElement(objectKey);
    });

    this.When(/^I enter "([^"]*)" "([^"]*)"$/, function (eleName,objKey1) {
        return page.srishti.inputData(eleName,objKey1);
    });

    this.When(/^I select the "([^"]*)" "([^"]*)"$/, function (eleName,objKey1) {
        return page.srishti.selectDD(eleName,objKey1);
    });

    this.When('I scroll to the bottom of the screen', function () {
        return page.srishti.scrollto();
    });

    this.Then(/^I should get "([^"]*)"$/, function (objectKey) {
        return page.srishti.elementExists(objectKey);
    });

};
