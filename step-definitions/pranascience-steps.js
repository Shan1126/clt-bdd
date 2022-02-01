const helpers = require("../runtime/helpers");
module.exports = function(){ 

this.Given ('I am on the pranaScience website',function(){
    return helpers.loadPage(page.pranascience.url)
}),
this.When (/^I enter the "([^"]*)" "([^"]*)"$/,function(objectkey,value){
    return page.pranascience.inputData(objectkey,value)
}),

this.When (/^I select the "([^"]*)" "([^"]*)"$/,function(objectkey,value){
    return page.pranascience.clickElement(objectkey,value)
}),

this.When (/^I select the gender "([^"]*)"$/,function(objectkey){
    return page.pranascience.clickButton(objectkey)
})

this.When (/^I click on the button "([^"]*)"$/,function(objectkey){
    return page.pranascience.clickButton(objectkey)
}),

this.Then (/^I should be in the "([^"]*)"$/,function(objectkey){
    return page.pranascience.elementExists(objectkey)
}),

this.Then (/^I see "([^"]*)"$/,function(objectkey){
    return page.pranascience.elementExists(objectkey)
}),

this.Then (/^I should be logged in on hitting the "([^"]*)"$/,function(objectkey){
    return page.pranascience.clickButton(objectkey)

}),
this.When (/^I click the link "([^"]*)"$/,function(objectkey){
    return page.pranascience.clickButton(objectkey)
}),

this.Then (/^I should land on the "([^"]*)"$/,function(objectkey){
    return page.pranascience.elementExists(objectkey)
}),

this.Then (/^I should be directed to the "([^"]*)"$/,function(objectkey){
    return page.pranascience.elementExists(objectkey)
}),

this. Then (/^I should receive a code on clicking the "([^"]*)"$/,function(objectkey){
    return page.pranascience.clickButton(objectkey)
})




 


}  
