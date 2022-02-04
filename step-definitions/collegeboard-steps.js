const helpers = require("../runtime/helpers");
module.exports = function(){

this.Given ('I am on the collegeboard website',function(){
    return helpers.loadPage(page.collegeboard.url)
}),

this.When (/^I click on the link "([^"]*)"$/,function(objectkey){
    return page.collegeboard.clickButton(objectkey)
}),

this.When (/^I enter "([^"]*)" "([^"]*)"$/,function(objectkey,value){
    return page.collegeboard.inputData(objectkey,value)
}),

this.When (/^I choose the "([^"]*)"$/,function(value){
    return page.collegeboard.clickButton(value)
}),

this.When (/^I give the "([^"]*)" "([^"]*)"$/,function(objectkey,value){
    return page.collegeboard.clickElement(objectkey,value)
}),

this.When (/^I click the checkbox "([^"]*)" "([^"]*)"$/,function(objectkey,value){
    return page.collegeboard.clickCheckBox(objectkey,value)
}),

this.Then (/^I should be able to sign up on clicking the "([^"]*)"$/,function(objectkey){
    return page.collegeboard.clickButton(objectkey)
}),

this.Then (/^I should be able to see the "([^"]*)"$/,function(objectkey){
    return page.collegeboard.elementExists(objectkey)
}),

this.Then (/^I should be navigating to the "([^"]*)"$/,function(objectkey){
    return page.collegeboard.elementExists(objectkey)
})







}