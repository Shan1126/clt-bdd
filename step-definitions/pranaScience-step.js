module.exports = function () {

    this.Given('I am on pranaScience portal', function () {
        return helpers.loadPage(page.pranaScience.url);
    });

    this.When(/^I enter firstName "([^"]*)"$/ , function(objKey1) {
        return page.pranaScience.inputFirstName(objKey1);
    });

    this.When(/^I enter lastName "([^"]*)"$/ , function(objKey1) {
        return page.pranaScience.inputLastName(objKey1);
    });

    this.When(/^I enter countryCode "([^"]*)"$/ , function(objKey1) {
        return page.pranaScience.inputCountryCode(objKey1);
    });
    
    this.When(/^I enter mobileNumber "([^"]*)"$/ , function(objKey1) {
        return page.pranaScience.inputMobileNumber(objKey1);
    });

    this.When(/^I enter email "([^"]*)"$/ , function(objKey1) {
        return page.pranaScience.inputEmail(objKey1);
    });    

    this.When(/^I enter password "([^"]*)"$/ , function(objKey1) {
        return page.pranaScience.inputPassword(objKey1);
    });

    this.When(/^I enter confirmPassword "([^"]*)"$/ , function(objKey1) {
        return page.pranaScience.inputConfirmPassword(objKey1);
    });

    this.When(/^I enter gender "([^"]*)"$/ , function(objKey1) {
        return page.pranaScience.inputGender(objKey1);
    });

    this.When(/^I enter ageRange "([^"]*)"$/ , function(objKey1) {
        return page.pranaScience.inputAgeRange(objKey1);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.pranaScience.clickElement(objectKey);
    });

    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.pranaScience.elementExists(objectKey);
    }); 

};