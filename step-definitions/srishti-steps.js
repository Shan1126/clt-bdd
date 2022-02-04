module.exports = function () {

    this.Given('I am at srishtiusa portal', function () {
        return helpers.loadPage(page.srishti.url); 
    });

    this.When(/^I click "([^"]*)"$/, function (objectKey) {
        return page.srishti.clickElement(objectKey);
    });

    this.When(/^I enter Email "([^"]*)"$/, function (objKey1) {
        return page.srishti.inputEmail(objKey1);
    });

    this.When(/^I enter Password "([^"]*)"$/, function (objKey1) {
        return page.srishti.inputPW(objKey1);
    });

    this.When(/^I enter Firstname "([^"]*)"$/, function (objKey1) {
        return page.srishti.inputFN(objKey1);
    });

    this.When(/^I enter Lastname "([^"]*)"$/, function (objKey1) {
        return page.srishti.inputLN(objKey1);
    });

    this.When(/^I enter Company "([^"]*)"$/, function (objKey1) {
        return page.srishti.inputComp(objKey1);
    });

    this.When(/^I enter Address "([^"]*)"$/, function (objKey1) {
        return page.srishti.inputAddr(objKey1);
    });

    this.When(/^I enter AptNo "([^"]*)"$/, function (objKey1) {
        return page.srishti.inputAptNo(objKey1);
    });

    this.When(/^I enter City "([^"]*)"$/, function (objKey1) {
        return page.srishti.inputCity(objKey1);
    });

    this.When(/^I enter Zip "([^"]*)"$/, function (objKey1) {
        return page.srishti.inputZip(objKey1);
    });

    this.When(/^I enter Phone "([^"]*)"$/, function (objKey1) {
        return page.srishti.inputPhone(objKey1);
    });

    this.When(/^I enter TaxID "([^"]*)"$/, function (objKey1) {
        return page.srishti.inputTaxID(objKey1);
    });

    this.When(/^I enter Comments "([^"]*)"$/, function (objKey1) {
        return page.srishti.inputComments(objKey1);
    });

    this.When(/^I select Country "([^"]*)"$/, function (objKey1) {
        return page.srishti.selectDropDownC(objKey1);
    });

    this.When(/^I select State "([^"]*)"$/, function (objKey1) {
        return page.srishti.selectDropDownS(objKey1);
    });

    this.When('I scroll to the bottom of the screen', function () {
        return page.srishti.scrollto();
    });


    this.Then(/^I should get "([^"]*)"$/, function (objectKey) {
        return page.srishti.elementExists(objectKey);
    });

};