module.exports = function () {

    this.Given('I am at Jootza portal', function () {
        return helpers.loadPage(page.jootzarajisignup.url);  //here we use file name
    });

    //scrollto
    this.When('I scroll to the bottom of the screen', function () {
        return page.jootzarajisignup.scrollto();
    });

    //scrolltoEA
    // this.When('I scroll to the bottom', function () {
    //   return page.jootzarajisignup.scrolltoEA();
    // });

    this.When(/^I click "([^"]*)"$/, function (objectKey) {
        return page.jootzarajisignup.clickElement(objectKey);
    });

    //Accesscode
    this.When(/^I enter the AccessCode "([^"]*)"$/, function (objKey1) {
        //return page.jootzarajisignup.inputAccessCode(objKey1);
        return page.jootzarajisignup.inputData("AccessCode", objKey1);
    });

    //Firstname
    this.When(/^I enter the FirstName "([^"]*)"$/, function (objKey1) {
        return page.jootzarajisignup.inputData("FirstName", objKey1);
    });

    //Lastname
    this.When(/^I enter the LastName "([^"]*)"$/, function (objKey1) {
        return page.jootzarajisignup.inputLastName(objKey1);
    });

    //Email
    this.When(/^I enter the Email "([^"]*)"$/, function (objKey1) {
        return page.jootzarajisignup.inputEmail(objKey1);
    });

    //username
    this.When(/^I enter the UserName "([^"]*)"$/, function (objKey1) {
        return page.jootzarajisignup.inputUserName(objKey1);
    });

    //password
    this.When(/^I enter the Password "([^"]*)"$/, function (objKey1) {
        return page.jootzarajisignup.inputPassword(objKey1);
    });

    //UN
    this.When(/^I enter the UN "([^"]*)"$/, function (objKey1) {
        return page.jootzarajisignup.inputUN(objKey1);
    });

    //PW
    this.When(/^I enter the PW "([^"]*)"$/, function (objKey1) {
        return page.jootzarajisignup.inputPW(objKey1);
    });

    this.When(/^I enter the EmailAddress "([^"]*)"$/, function (objKey1) {
        return page.jootzarajisignup.inputEmailAddr(objKey1);
    });

    this.Then(/^I should be able to see "([^"]*)"$/, function (objectKey) {
        return page.jootzarajisignup.elementExists(objectKey);
    });

};

