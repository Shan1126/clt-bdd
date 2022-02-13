module.exports = function () {

    this.Given('I am on the pranascience portal', function () {
        return helpers.loadPage(page.PranaScienceSignup.url);
    });
    
    this.When(/^In Prana I should see "([^"]*)"$/ , function (objectKey) {
        return page.PranaScienceSignup.clickElement(objectKey);
    });

    
    this.When(/^I enter the firstName in Prana "([^"]*)"$/ , function (objKey1) {
        return page.PranaScienceSignup.inputFirstName(objKey1);
    });

   
    this.When(/^I enter the lastName "([^"]*)"$/ , function (objKey1) {
        return page.PranaScienceSignup.inputLastName(objKey1);
    });
    
    this.When(/^I select the countryCode "([^"]*)"$/, function (objKey1) {
    return page.PranaScienceSignup.inputCountryCode(objKey1);
     });

   
    this.When(/^I enter the mobileNumber "([^"]*)"$/ , function (objKey1) {
        return page.PranaScienceSignup.inputMobileNumber(objKey1);
    });

 
    this.When(/^I enter the email "([^"]*)"$/ , function (objKey1) {
        return page.PranaScienceSignup.inputEmail(objKey1);
    });

  
    this.When(/^I enter the password "([^"]*)"$/ , function (objKey1) {
        return page.PranaScienceSignup.inputPassword(objKey1);
    });

  
    this.When(/^I enter the confirmPassword "([^"]*)"$/ , function ( objKey1) {
        return page.PranaScienceSignup.inputConfirmPassword( objKey1);
    });

 
    this.When(/^I select the gender "([^"]*)"$/ , function (objKey1) {
        return page.PranaScienceSignup.inputGender(objKey1);
    });

  
    this.When(/^I select the ageRange "([^"]*)"$/ , function ( objKey1) {
        return page.PranaScienceSignup.inputAgeRange( objKey1);
    });

    this.When(/^In Prana I click on "([^"]*)"$/ , function (objectKey) {
        return page.PranaScienceSignup.clickElement(objectKey);

    });
};
