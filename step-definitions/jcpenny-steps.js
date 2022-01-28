const helpers = require("../runtime/helpers");
module.exports = function(){
    
this.Given ('I am on the jcpenny website',function(){
    return helpers.loadPage(page.jcpenny.url);
}),

this.When (/^I click on the "([^"]*)"$/,function(objectkey){
    return page.jcpenny.clickElement(objectkey)
}),

this.Then (/^I should be navigated to the "([^"]*)"$/,function(objectkey){
    return page.jcpenny.elementExists(objectkey)
})

this.When (/^I enter the "([^"]*)"$/,function(objectkey){
    return page.jcpenny.enterInput(objectkey)
}),

/*this.When (/^I enter my "([^"]*)"$/,function(objectkey){
    return page.jcpenny.enterPassWord(objectkey)
} ),*/

 this.When (/^I click on the button "([^"]*)"$/,function(objectkey){
     return page.jcpenny.clickElement(objectkey)
 } ),
 
 this.Then (/^I should be displayed an "([^"]*)"$/,function(objectkey){
     return page.jcpenny.displayMessage(objectkey)
 })

this. When (/^I enter text in "([^"]*)"$/,function(objectkey){
    return page.jcpenny.searchText(objectkey)
}),

this.When (/^click "([^"]*)"$/,function(objectkey){
    return page.jcpenny.clickElement(objectkey)
}),

this.Then (/^I should be shown the "([^"]*)"$/,function(objectkey){
    return page.jcpenny.searchItems(objectkey)
}),

this.When (/^I click the icon "([^"]*)"$/,function(objectkey){
    return page.jcpenny.clickElement(objectkey)
}),

this.When (/^enter my zipcode in the "([^"]*)"$/,function(objectkey){
    return page.jcpenny.enterValue(objectkey)
}),

this.When (/^click on the "([^"]*)"$/,function(objectkey){
    return page.jcpenny.clickElement(objectkey)
}),

this.Then (/^I should see "([^"]*)"$/,function(objectkey){
    return page.jcpenny.displayMessage(objectkey)
}),

this.Then(/^on clicking the "([^"]*)"$/,function(objectkey){
    return page.jcpenny.clickElement(objectkey)
}),

this.When (/^enter in the firstName "([^"]*)"$/,function(objectkey){
    return page.jcpenny.inputFirstName(objectkey)
}),

this.When (/^enter in the lastName "([^"]*)"$/,function(objectkey){
    return page.jcpenny.inputLastName(objectkey)
}),

this.When (/^enter in the phoneNumber "([^"]*)"$/,function(objectkey){
    return page.jcpenny.inputPhoneNumber(objectkey)
}),

this.When (/^enter in the emailId "([^"]*)"$/,function(objectkey){
    return page.jcpenny.inputEmail(objectkey)
}),

this.When (/^enter in the password "([^"]*)"$/,function(objectkey){
    return page.jcpenny.inputPassWord(objectkey)
}),

this.When (/^on clicking the text "([^"]*)"$/,function(objectkey){
    return page.jcpenny.clickElement(objectkey)
}),

this.Then (/^I should be a "([^"]*)"$/,function(objectkey){
    return page.jcpenny.displayMessage(objectkey)
}),

this.When (/^click the button "([^"]*)"$/,function(objectkey){
    return page.jcpenny.clickElement(objectkey)
}),

this.When (/^enter in the emailaddress "([^"]*)"$/,function(objectkey){
    return page.jcpenny.inputAddress(objectkey)
}),

this. Then (/^a success message will be displayed on clicking "([^"]*)"$/,function(objectkey){
    return page.jcpenny.clickElement(objectkey)

})
    




}