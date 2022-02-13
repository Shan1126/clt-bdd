module.exports = function () {

    this.Given('I am on the grubHub portal', function () {
        return helpers.loadPage(page.GrubHub.url);
    });

    
    this.When(/^In GHub I should see "([^"]*)"$/, function (objectKey) {
        return page.GrubHub.clickElement(objectKey);
    });

    this.When(/^In GHub I enter the "([^"]*)" "([^"]*)"$/, function (eleName, objKey1) {
        return page.GrubHub.inputTextBoxData(eleName, objKey1);
    });


    this.When(/^In GHub I click on "([^"]*)"$/ , function (objectKey) {
        return page.GrubHub.clickElement(objectKey);

    });
};