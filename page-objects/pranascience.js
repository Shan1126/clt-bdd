


const helpers = require("../runtime/helpers");
module.exports = {

    url:'https://www.pranascience.org/auth-signup',

    elements:{
        firstName:'//*[@name="firstName"]',
        lastName:'//*[@name="lastName"]',
        email:'//*[@name="email"]',
        mobileNumber:'//*[@formControlName="mobileNumber"]',
        passWord:'//*[@placeholder="Password"]',
        confirmPassWord:'//*[@placeholder="Confirm Password"]',
        countryCode:'//*[@name="countryCode"]',
        value:'/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[3]/div/select/option[2]',
        female:'/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[8]/div[2]/label',
        //female:'//*[@value="Female"]',
        age:'/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[9]/div/select',
        ageRange:'/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[9]/div/select/option[3]',
        Register:'/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[10]/button',
        verification:'/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/h4',
        userName:'//*[@placeholder="Email"]',
        PW:'//*[@placeholder="Password"]',
        login:'//*[@class="btn btn-primary"]',
        password:'//*[@type="password"]',
        signin:'//*[@class="btn btn-primary btn-block"]',
        errorMessage:'/html/body/app-root/app-auth-login/section/div/div/div[2]/div/div/form/div/div[3]/div/div/div/div',
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
        Code:'//*[@formcontrolname="countryCode"]',
        list:'/html/body/app-root/app-reset-password/section/div/div/div[1]/div/div/form/div/div[1]/div/select/option[2]'



    },

clickElement:async function(objectkey,value){
    var selector = page.pranascience.elements[objectkey]
    var input = page.pranascience.elements[value]
    await driver.sleep(2000)
    driver.findElement(By.xpath(selector)).click()
    return driver.findElement(By.xpath(input)).click()
},

clickButton:async function(objectkey){
    var selector =page.pranascience.elements[objectkey]
    await driver.sleep(1000)
    return driver.findElement(By.xpath(selector)).click()
    
},

elementExists:async function(objectkey){
    var selector =page.pranascience.elements[objectkey]
    await driver.sleep(2000)
    return driver.findElement(By.xpath(selector))
},

inputData:async function(objectkey,value){
    var selector = page.pranascience.elements[objectkey]
    await driver.sleep(1000)
    return driver.findElement(By.xpath(selector)).sendKeys(value)
}







} 

