module.exports = function () {

    this.Given('I am on the doordash portal', function () {
        return helpers.loadPage(page.DoorDash.url);
    });

    this.When(/^In DoorD I should see "([^"]*)"$/ , function (objectKey) {
        return page.DoorDash.clickElement(objectKey);
    });

    this.When(/^In DoorD I enter the "([^"]*)" "([^"]*)"$/, function (eleName, objKey1) {
        return page.DoorDash.inputTextBoxData(eleName, objKey1);
    });

    this.When(/^In DoorD I select the Country "([^"]*)"$/, function (objKey1) {
        return page.DoorDash.inputCountry(objKey1);
         });

    this.When(/^In DoorD I click on "([^"]*)"$/ , function (objectKey) {
        return page.DoorDash.clickElement(objectKey);

    });
};


