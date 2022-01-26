module.exports = function() {
 
this.Given ('I am on jootza website',async function(){
    return helpers.loadPage(page.jootza.url);
});

this.When(/^I clicked on the link "([^']*)"$/,function(keyword){
    return page.jootzasignupbhavani.clickElement(keyword);
});

this.When(/^I enter userName "([^"]*)"$/,function(input) {
    return page.jootzasignupbhavani.enterUserName(input)
});

this.When(/^I enter passWord "([^"]*)"$/,function(input1){
    return page.jootzasignupbhavani.enterPassWord(input1)
});

this.When(/^I click on the button "([^"]*)"$/,function(keyword){
    return page.jootzasignupbhavani.clickButton(keyword);
})

this.Then(/^I should be displayed the "([^"]*)"$/,function(keyword){
    return page.jootzasignupbhavani.displayMessage(keyword)
});





}