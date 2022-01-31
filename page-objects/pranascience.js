


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
        verification:'/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/h4',
        userName:'//*[@placeholder="Email"]',
        login:'//*[@class="btn btn-primary"]',
        PW:'//*[@type="password"]',
        signin:'//*[@class="btn btn-primary btn-block"]',
        errorMessage:'//*[@class="text-danger h6 ml-2"]',
        home:'//*[@id="navigation"]/ul/li[1]/a',
        aboutUs:'//*[@id="navigation"]/ul/li[2]/a',
        howItWorks:'//*[@id="navigation"]/ul/li[3]/a',
        books:'//*[@id="navigation"]/ul/li[4]/a',
        login:'//*[@id="navigation"]/ul/li[5]/a',
        breatheWell:'//*[@id="home"]/div/div/div/div/div/div[1]/div/h1',
        introduction:'/html/body/app-root/app-master-page/app-page-aboutus/section/section/div/div/div/div/div/h5[1]',
        howDoesItWork:'//*[@id="home"]/div/div/div/div/h4',
        books:'//*[@id="navigation"]/ul/li[4]/a',
        login:'//*[@id="navigation"]/ul/li[5]/a',
        book:'//*[@id="home"]/div/div/div/div/h4',
        loginBtn:'/html/body/app-root/app-auth-login/section/div/div/div[2]/div/div/h4',
        forgotPassword:'/html/body/app-root/app-auth-login/section/div/div/div[2]/div/div/form/div/div[3]/div/p/a',
        resetPassword:'/html/body/app-root/app-reset-password/section/div/div/div[1]/div/div/h4',
        sendCode:'/html/body/app-root/app-reset-password/section/div/div/div[1]/div/div/form/div/div[3]/button',
        list:'/html/body/app-root/app-reset-password/section/div/div/div[1]/div/div/form/div/div[1]/div/select'



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
},

inputUserName:async function(value){
    var selector =page.pranascience.elements['userName']
    await driver.sleep(1000)
    return driver.findElement(By.xpath(selector)).sendKeys(value)
},

inputPW:async function(value){
    var selector = page.pranascience.elements['PW']
    await driver.sleep(1000)
    return driver.findElement(By.xpath(selector)).sendKeys(value)
},

displayMessage:async function(objectkey){
    var selector = page.pranascience.elements[objectkey]
    await driver.sleep(1000)
    return driver.findElement(By.xpath(selector))
},

selectList:async function(objectkey){
    var selector = page.pranascience.elements[objectkey]
    var input = '/html/body/app-root/app-reset-password/section/div/div/div[1]/div/div/form/div/div[1]/div/select/option[2]'
    driver.findElement(By.xpath(selector)).click()
    return driver.findElement(By.xpath(input)).click()
}







} 

