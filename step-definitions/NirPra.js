module.exports = function () {
    this.Given('I am on the pranascience portal', function () {
        return helpers.loadPage(page.NirPra.url);
    });
    this.When(/^I a enter username "([^"]*)"$/, function (objKey1) {
        return page.NirPar.inputUserName(objKey1);
    });
    this.When(/^I enter First name "([^"]*)"$/, function (objectKey) {
        return page.NirPra.inputUserName(objectKey);
    });
    this.Then(/^corresponing page should be opened "([^"]*)"$/, function (objectKey) {
        // Write code here that turns the phrase above into concrete actions
        return helpers.loadPage(page.NirPra.abc1);
    });
    this.Then(/^ the corresponding "([^"]*)"$ are entered/, function (objKey1) {
        return page.NirFacebook.inputUserName(objKey1);
    });
    this.When(/^I Click on "([^"]*)"$/, function (objectKey) {
        return page.NirPra.clickElement(objectKey);
    });
};

module.exports = function () {
    this.Given('I am at pranascience portal', function () {
        return helpers.loadPage(page.NirPra.url);  //here we use file name
    });
    this.When(/^I select the countryCode "([^"]*)"$/, function (objKey1) {
        return page.NirPra.inputCountryCode(objKey1);
    });
    this.When(/^I click upon "([^"]*)"$/, function (objectKey) {
        return page.NirPra.clickElement(objectKey);
    });

    this.When(/^I give "([^"]*)" "([^"]*)"$/, function (eleName, objKey1) {
        return page.NirPra.inputTextBoxData(eleName, objKey1);
    });

    this.When(/^I select "([^"]*)" "([^"]*)"$/, function (eleName, objKey1) {
        return page.NirPra.selectDropDown(eleName, objKey1);
    });
   
   
    this.When(/^I select the gender "([^"]*)"$/ , function (objKey1) {
        return page.NirPra.inputGender(objKey1);
    });
    this.When(/^I select the ageRange "([^"]*)"$/ , function ( objKey1) {
        return page.NirPra.inputAgeRange( objKey1);
    });
    this.Then(/^I want to see "([^"]*)"$/, function (objectKey) {
        return page.NirPar.verification(objectKey);
    });
};