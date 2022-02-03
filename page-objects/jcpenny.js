
const helpers = require("../runtime/helpers");
 module.exports ={

    url:'https://www.jcpenney.com/',

    elements:{
        signin:'//*[@id="accountBlock"]/div/div/div/button/div/div/p[2]',
        signinPage:'//*[@id="mainContainerBlock"]/div[6]/div/div[2]/div/div[1]/div[2]/form/div/div/div[1]/div',
        email:by.id('loginEmail'),
        passWord:by.id('pwd'),
        signinBtn:'//*[@id="mainContainerBlock"]/div[6]/div/div[2]/div/div[1]/div[2]/form/div/div/div[5]/button',
        errorMessage:'//*[@id="mainContainerBlock"]/div[6]/div/div[2]/div/div[1]/div[2]/form/div[1]/div/div/div/p',
        searchBox:by.id('searchInputId'),
        searchIcon:'//*[@id="typeaheadInputContainer"]/div/button',
        searchResult:'//*[@id="gallery-title"]/h1',
        storeLocator:'//*[@id="findStore"]/div/a/div[1]',
        search:'//*[@id="main"]/div[3]/div[1]/div/div[1]/div/form/div/button',
        storesNearMe:'//*[@id="main"]/div[3]/div[2]/div/div/div/div[1]/div/div[1]/p',
        searchTextBox:by.name('q'),
        registeredMember:'//*[@id="mainContainerBlock"]/div[6]/div/div[1]/a[2]/span',
        createAccount:'//*[@id="mainContainerBlock"]/div[6]/div/div[2]/div/div[1]/div[2]/form/div/div/div[6]/div/button',
        firstName:by.id('firstName'),
        lastName:by.id('lastName'),
        phoneNumber:by.id('phone'),
        emailId:by.id('createAccountEmail'),
        password:by.id('password'),
        createButton:'//*[@id="mainContainerBlock"]/div[6]/div/div[2]/div/div/div[3]/div/div/form/div/div[2]/div/div/button',
        forgotPassword:'//*[@id="mainContainerBlock"]/div[6]/div/div[2]/div/div[1]/div[2]/div/div/p/button',
        send:'//*[@id="mainContainerBlock"]/div[6]/div/div[2]/div/div/div[2]/div/div/div/form/div[2]/div[2]/button',
        emailaddress:by.id('forgotPasswordSliderEmail'),
        men:'//*[@id="comp_imagehotspots_7"]/div/map/area[1]',
        mensClothing:'//*[@id="gallery-title"]/h1',
        girls:'//*[@id="comp_imagehotspots_7"]/div/map/area[2]',
        boys:'//*[@id="comp_imagehotspots_7"]/div/map/area[3]',
        women:'//*[@id="comp_imagehotspots_7"]/div/map/area[4]',
        babyKidsGirls:'//*[@id="gallery-title"]/h1',
        babyKidsBoy:'//*[@id="gallery-title"]/h1',
        womenShoes:'//*[@id="gallery-title"]/h1',
               

    },

 clickElement:async function(objectkey){
    var selector = page.jcpenny.elements[objectkey];
    await driver.sleep(5000)
    return driver.findElement(By.xpath(selector)).click();
},

elementExists:async function(objectkey){
    var selector = page.jcpenny.elements[objectkey];
    await driver.sleep(5000);
    return driver.findElement(By.xpath(selector))
},
 enterInput:async function(objectkey){
     var input = page.jcpenny.elements[objectkey]
     await driver.sleep(5000)
     return driver.findElement(input).sendKeys('priya21345@gmail.com')
},

enterPassWord:async function(objectkey){
    var password =page.jcpenny.elements[objectkey]
    await driver.sleep(5000);
    return driver.findElement(password).sendKeys('Password@1234') 
}, 

displayMessage:async function(objectkey){
    var message = page.jcpenny.elements[objectkey];
    await driver.sleep(5000);
    return driver.findElement(By.xpath(message))
},

searchText:async function(objectkey){
    var search = page.jcpenny.elements[objectkey]
    await driver.sleep(5000);
    return driver.findElement(search).sendKeys('dress')
},

searchItems:async function(objectkey){
    var result = page.jcpenny.elements[objectkey]
    await driver.sleep(5000)
    return driver.findElement(By.xpath(result))
},

enterValue:async function(objectkey){
    var value =page.jcpenny.elements[objectkey]
    await driver.sleep(5000)
    return driver.findElement(value).sendKeys('08820')
},

inputFirstName:async function(value){
    var first = page.jcpenny.elements['firstName']
    await driver.sleep(5000);
    driver.findElement(first).sendKeys(value)
},

inputLastName:async function(value){
    var last = page.jcpenny.elements['lastName']
    await driver.sleep(5000);
    driver.findElement(last).sendKeys(value)
},

inputPhoneNumber:async function(value){
    var number = page.jcpenny.elements['phoneNumber']
    await driver.sleep(5000);
    driver.findElement(number).sendKeys(value)
},

inputEmail:async function(value){
    var email = page.jcpenny.elements['emailId']
    await driver.sleep(5000);
    driver.findElement(email).sendKeys(value)
},

inputPassWord:async function(value){
    var word = page.jcpenny.elements['password']
    await driver.sleep(5000);
    driver.findElement(word).sendKeys(value)
},

inputAddress:async function(value){
    var emailid =page.jcpenny.elements['emailaddress']
    await driver.sleep(5000)
    return driver.findElement(emailid).sendKeys(value)
},

scrollto:async function(objectkey){
    var selector = page.jcpenny.elements[objectkey]
    await driver.sleep(5000)
    return helpers.scrollToElement(driver.findElement(By.xpath(selector)))
},

inputUserName:async function(value){
    var selector = page.jcpenny.elements['email']
    await driver.sleep(2000)
    return driver.findElement(selector).sendKeys(value)
},

inputPW:async function(value){
    var selector = page.jcpenny.elements['passWord']
    await driver.sleep(2000)
    return driver.findElement(selector).sendKeys(value)
}












}
