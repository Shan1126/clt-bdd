module.exports = function () {


    this.Given('I wanted to be in shrishtiusa.com webpage', function () {
        return helpers.loadPage(page.nirSrishti.url);
    });


    this.When(/^I click up on "([^"]*)"$/, function (objectKey) {
        return page.nirSrishti.clickElement(objectKey);
    });


    this.When('Corresponding My Account page should be opened', function () {
        return helpers.loadPage(page.nirSrishti.url1);
    });

    this.When(/^I click on to "([^"]*)"$/, function (objectKey) {
        return page.nirSrishti.clickElement(objectKey);
    });

    this.When('Create Account page should open', function () {
        return helpers.loadPage(page.nirSrishti.url2);
    });

    this.When(/^I Enter the Email "([^"]*)"$/, function (objectKey1) {
        return page.nirSrishti.inputEmail(objectKey1);
    });

    this.When(/^I Enter Password as "([^"]*)"$/, function (objectKey2) {
        return page.nirSrishti.inputPassword(objectKey2);
    });

    this.When(/^I Enter First Name as "([^"]*)"$/, function (objectKey3) {
        return page.nirSrishti.inputFirstName(objectKey3);
    });

    this.When(/^I Enter Last Name as "([^"]*)"$/, function (objectKey4) {
        return page.nirSrishti.inputLastName(objectKey4);
    });

    this.When(/^I Enter Company as "([^"]*)"$/, function (objectKey5) {
        return page.nirSrishti.inputCompany(objectKey5);
    });

    this.When(/^I Enter Address as "([^"]*)"$/, function (objectKey6) {
        return page.nirSrishti.inputAddress(objectKey6);
    });

    this.When(/^I Enter Suite as "([^"]*)"$/, function (objectKey7) {
        return page.nirSrishti.inputSuite(objectKey7);
    });

    this.When(/^I Enter City as "([^"]*)"$/, function (objectKey8) {
        return page.nirSrishti.inputCity(objectKey8);
    });

    this.When(/^I select Country as "([^"]*)" "([^"]*)"$/, function (Name, Key) {
        return page.nirSrishti.selectDropDown(Name, Key);
    });

    this.When(/^I Enter Zip as "([^"]*)"$/, function (objectKey9) {
        return page.nirSrishti.inputZip(objectKey9);
    });

    this.When(/^I Enter Phone as "([^"]*)"$/, function (objectKey10) {
        return page.nirSrishti.inputPhone(objectKey10);
    });

    this.When(/^I Enter Tax ID as "([^"]*)"$/, function (objectKey11) {
        return page.nirSrishti.inputTaxID(objectKey11);
    });


    this.When(/^I Enter Comment as "([^"]*)"$/, function (objectKey12) {
        return page.nirSrishti.inputComments(objectKey12);
    });


}