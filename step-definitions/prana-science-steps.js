module.exports = function () {

    this.Given('I am on the Pranascience portal',  function () {
        return helpers.loadPage('http://www.pranascience.org');
    });
   

    this.When(/^I click on "([^"]*)" link$/,  function (objectKey) {
            return page.pranascience.clickElement(objectKey);
    });


    this.Then(/^I should see "([^"]*)" screen$/,  function (objectKey) {
        return page.pranascience.elementExists(objectKey);
    });


}