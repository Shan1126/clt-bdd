


const helpers = require("../runtime/helpers");
module.exports = {

    url:'https://www.pranascience.org/auth-signup',

    elements:{
        firstName:by.name('firstName'),
        lastName:by.name('lastName'),
        countryCode:by.name('countryCode'),
        countryCode:'/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[3]/div/select',
        email:by.name('email'),
        mobileNumber:'//*[@formControlName="mobileNumber"]',
        passWord:'//*[@placeholder="Password"]',
        confirmPassWord:'//*[@placeholder="Confirm Password"]',
        female:'/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[8]/div[2]/label',
        value:'/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[3]/div/select',
        agerange:'/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[9]/div/select',
        Register:'/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[10]/button',
        verification:'/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/h4'


    },

inputFirstName:async function(objectkey){
    var fname = page.pranascience.elements['firstName']
    await driver.sleep(1000)
    return driver.findElement(fname).sendKeys(objectkey)
},

inputLastName:async function(objectkey){
    var lname = page.pranascience.elements['lastName']
    await driver.sleep(1000)
    return driver.findElement(lname).sendKeys(objectkey)
},

inputCode:async function(objectkey){
    var code = page.pranascience.elements['countryCode']
    await driver.sleep(1000)
    return driver.findElement(code).click
},

inputMail:async function(value){
    var selector = page.pranascience.elements['email']
    await driver.sleep(1000)
    return driver.findElement(selector).sendKeys(value)
},

inputNumber:async function(value){
     var selector = page.pranascience.elements['mobileNumber']
    await driver.sleep(1000)
    return driver.findElement(By.xpath(selector)).sendKeys(value)

},

inputPassWord:async function(value){
    var pword = page.pranascience.elements['passWord']
    await driver.sleep(1000)
    return driver.findElement(By.xpath(pword)).sendKeys(value)

}, 

inputConfirmPW:async function(value){
    var selector = page.pranascience.elements['confirmPassWord']
    await driver.sleep(2000)
    return driver.findElement(By.xpath(selector)).sendKeys(value)
},

clickElement:async function(objectkey){
    var selector = page.pranascience.elements[objectkey]
    var input = driver.findElement(By.xpath('//*[@value="female"]'))
    await driver.sleep(2000)
    return driver.findElement(By.xpath(selector)).click(input)
},

clickCountryValue:async function(objectkey){
    var selector = page.pranascience.elements[objectkey]
    var input = '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[3]/div/select/option[3]'
    await driver.sleep(2000)
    driver.findElement(By.xpath(selector)).click()
    return driver.findElement(By.xpath(input)).click()
},

selectAge:async function(objectkey){ 
    var selector = page.pranascience.elements[objectkey]
    var input ='/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[9]/div/select/option[3]'
    await driver.sleep(2000)
    driver.findElement(By.xpath(selector)).click()
    return driver.findElement(By.xpath(input)).click()
},

clickButton:async function(objectkey){
    var selector =page.pranascience.elements[objectkey]
    await driver.sleep(1000)
    return driver.findElement(By.xpath(selector)).click()
    
},

navigatePage:async function(objectkey){
    var selector = page.pranascience.elements[objectkey]
    return driver.findElement(By.xpath(selector))
}







} 

