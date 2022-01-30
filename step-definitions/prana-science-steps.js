module.exports = function () {

    this.Given('I am on the Pranascience portal',  function () {
        return helpers.loadPage('http://www.pranascience.org/login');
    });
   

    this.When(/^I click on "([^"]*)" link$/,  function (objectKey) {
            return page.pranaScience.clickElement(objectKey);
    });


    this.Then(/^I should see "([^"]*)" screen$/,  function (objectKey) {
        return page.pranaScience.elementExists(objectKey);
    });


}