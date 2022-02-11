module.exports = function () {

    this.Given('I am on the Pranascience portal', function () {
        return helpers.loadPage('http://www.pranascience.org/login');
    });

    this.When(/^I click on "([^"]*)" link$/, function (objectKey) {
        return page.pranaScience.clickElement(objectKey);
    });
   
    this.Then(/^I should see "([^"]*)" screen$/, function (objectKey) {
        return page.pranaScience.elementExists(objectKey);
    });

    this.Then(/^I enter firstname "([^"]*)"$/, function (objKey2) {
        return page.pranaScience.inputFirstName(objKey2);
    });
    this.Then(/^I enter lastname "([^"]*)"$/, function (objKey2) {
        return page.pranaScience.inputLastName(objKey2);
    });
    this.Then(/^I select countrycode "([^"]*)"$/, function (objKey2) {
        return page.pranaScience.inputCountryCode(objKey2);
    });
    this.Then(/^I enter emailaddress "([^"]*)"$/, function (objKey2) {
        return page.pranaScience.inputEmailAddress(objKey2);
    });
    this.Then(/^I enter mobilenumber "([^"]*)"$/, function (objKey2) {
        return page.pranaScience.inputMobileNumber(objKey2);
    });
    this.Then(/^I enter newpassword "([^"]*)"$/, function (objKey2) {
        return page.pranaScience.inputNewPassword(objKey2);
    });
    this.Then(/^I enter secondnewpassword "([^"]*)"$/, function (objKey2) {
        return page.pranaScience.inputSecondNewPassword(objKey2);
    });

    this.Then(/^I select on Gender "([^"]*)"$/, function (objKey2) {
        return page.pranaScience.inputGender(objKey2);
    });
    this.Then(/^I select ageRange "([^"]*)"$/, function (objKey2) {
        return page.pranaScience.inputAgeRange(objKey2);
    });
    this.Then(/^I click on Reg "([^"]*)"$/, function (objectKey) {
      return page.pranaScience.inputGender(objectKey);
    });
    
}
