module.exports = function () {

    this.Given('I am at pranascience portal', function () {
        return helpers.loadPage(page.rprana.url);  //here we use file name
    });

    this.When(/^I click upon "([^"]*)"$/, function (objectKey) {
        return page.rprana.clickElement(objectKey);
    });

    this.When(/^I give "([^"]*)" "([^"]*)"$/, function (eleName, objKey1) {
    return page.rprana.inputTextBoxData(eleName, objKey1);
    });

    this.When(/^I select "([^"]*)" "([^"]*)"$/, function (eleName, objKey1) {
        return page.rprana.selectDropDown(eleName, objKey1);
    });
    
    this.When(/^I choose gender "([^"]*)"$/, function (objKey1) {
        return page.rprana.clickElement(objKey1);
    });

    this.Then(/^I want to see "([^"]*)"$/, function (objectKey) {
        return page.rprana.elementExists(objectKey);
    });
};