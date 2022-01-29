module.exports = function () {

    this.Given('I am on the Facebook portal', function () {
        return helpers.loadPage(page.NirFacebook.url);
    });


    this.When(/^I a enter username "([^"]*)"$/, function (objKey1) {
        return page.NirFacebook.inputUserName(objKey1);
    });

    this.When(/^I a enter password "([^"]*)"$/, function (objKey1) {
        return page.NirFacebook.inputPassword(objKey1);
    });
    this.When(/^I a click on "([^"]*)"$/, function (objectKey) {
        return page.NirFacebook.clickElement(objectKey);
    });
    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.NirFacebook.clickElement(objectKey);
    });


    this.Then(/^I should see a "([^"]*)$"/, function (objectKey) {
        return page.NirFacebook.elementExists(objectKey);
    });

    this.Then(/^wrong password page should load "([^"]*)"$/, function (objectKey) {
        return page.NirFacebook.elementExists(objectKey);
    });
    this.Then(/^wrong password page should load$/, function () {
        return helpers.loadPage(page.NirFacebook.url1);


    });
    this.Then(/^corresponing page should be loaded "([^"]*)"$/, function (objectKey) {
        // Write code here that turns the phrase above into concrete actions
        return helpers.loadPage(page.NirFacebook.xyz1);
    });
    

};
