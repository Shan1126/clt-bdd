const helpers = require("../runtime/helpers");
module.exports = function(){
this.Given ('I am on the pranaScience website',function(){
    return helpers.loadPage(page.pranascience.url)
}),
this.When (/^I enter the firstName "([^"]*)"$/,function(objectkey){
    return page.pranascience.inputFirstName(objectkey)
}),

this.When (/^I enter the lastName "([^"]*)"$/,function(objectkey){
    return page.pranascience.inputLastName(objectkey)
}),

this.When (/^enter the email "([^"]*)"$/,function(objectkey){
    return page.pranascience.inputMail(objectkey)
}),

this.When (/^I enter the mobileNumber "([^"]*)"$/,function(objectkey){
    return page.pranascience.inputNumber(objectkey)
}),

this.When (/^I enter the passWord "([^"]*)"$/,function(objectkey){
    return page.pranascience.inputPassWord(objectkey)
}),

this.When (/^I enter confirmPassWord "([^"]*)"$/,function(objectkey){
    return page.pranascience.inputConfirmPW(objectkey)
}),

this.When (/^I select the gender "([^"]*)"$/,function(objectkey){
    return page.pranascience.clickElement(objectkey)
}),

this.When (/^I select countryCode "([^"]*)"$/,function(objectkey){
    return page.pranascience.clickCountryValue(objectkey)
}),

this.When (/^I select age "([^"]*)"$/,function(objectkey){
    return page.pranascience.selectAge(objectkey)
}),

this.When (/^click on the button "([^"]*)"$/,function(objectkey){
    return page.pranascience.clickButton(objectkey)
}),

this.Then (/^I should be in the "([^"]*)"$/,function(objectkey){
    return page.pranascience.navigatePage(objectkey)
}),

this.When (/^I enter userName "([^"]*)"$/,function(objectkey){
    return page.pranascience.inputUserName(objectkey)
}),

this.When (/^I click the button "([^"]*)"$/,function(objectkey){
    return page.pranascience.clickButton(objectkey)
}),

this.When (/^I enter PW "([^"]*)"$/,function(objectkey){
    return page.pranascience.inputPW(objectkey)
}),

this.When (/^hit "([^"]*)"$/,function(objectkey){
    return page.pranascience.clickButton(objectkey)
}),

this.Then (/^I see "([^"]*)"$/,function(objectkey){
    return page.pranascience.displayMessage(objectkey)
}),

this.Then (/^I should be logged in on hitting the "([^"]*)"$/,function(objectkey){
    return page.pranascience.clickButton(objectkey)

}),
this.When (/^I click the link "([^"]*)"$/,function(objectkey){
    return page.pranascience.clickButton(objectkey)
}),

this.Then (/^I should land on the "([^"]*)"$/,function(objectkey){
    return page.pranascience.displayMessage(objectkey)
}),

this.When (/^I click on the link in the bottom "([^"]*)"$/,function(objectkey){
    return page.pranascience.clickButton(objectkey)
}),

this.Then (/^I should be directed to the "([^"]*)"$/,function(objectkey){
    return page.pranascience.displayMessage(objectkey)
}),

this. Then (/^I should receive a code on clicking the "([^"]*)"$/,function(objectkey){
    return page.pranascience.clickButton(objectkey)
}),

this.When (/^I select countryCode from the dropdown "([^"]*)"$/,function(objectkey){
    return page.pranascience.selectList(objectkey)
})




 


}  
