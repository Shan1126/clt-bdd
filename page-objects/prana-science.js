const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://www.pranascience.org/login',

    elements: { 
        signin: '//*[@id="topnav"]/div/div[2]/a',
        LoginHeader1: '/html/body/app-root/app-auth-login/section',
        signup: '/html/body/app-root/app-auth-login/section/div/div/div[2]/div/div/form/div/div[5]/p/a',
        signupDetails: '//*[@id="navigation"]/ul/li[1]/a',
        FirstName: by.name('firstName'),
        lastname:  by.name('lastName'),
        countryCode: by.name('countryCode'),
        mobileNumber:  by.xpath('/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[8]/div/input'),
        emailId: by.name('email'),
        newPassword: by.xpath('/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[6]/div/input'),
        secondNewPassword:  by.xpath('/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[7]/div/input'),
        gender: by.xpath('//*[@value="male"]'), 
        ageRange: by.xpath('//*[@formcontrolname ="ageRange"]'),                 
        Register: by.xpath('/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[10]/button'),
        verification :'/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form'
    },
    clickElement: function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.pranaScience.elements[objectKey];
        console.log(objectKey);
        console.log(selector);

       
        return driver.findElement(By.xpath(selector)).click();
    },
    elementExists: function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.pranaScience.elements[objectKey];
        console.log('printing the value of selector');
        console.log(selector);
        return driver.findElement(By.xpath(selector));
    },
    inputFirstName: async function(valu) {
        // valu --> raj
        // objectKey --> input field
        var selector = page.pranaScience.elements['FirstName']; // //*[@id="login-username relate-pos"]
        console.log(valu);
        console.log(selector);

        await driver.sleep(5000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(valu);
   
    },
    inputLastName: async function(valu) {
        // valu --> raj
        // objectKey --> input field
        var selector = page.pranaScience.elements['lastname']; // //*[@id="login-username relate-pos"]
        console.log(valu);
        console.log(selector);

        await driver.sleep(5000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(valu);
   
    },
    inputCountryCode: async function(valu) {
        // valu --> raj
        // objectKey --> input field
        var selector = page.pranaScience.elements['countryCode']; // //*[@id="login-username relate-pos"]
        console.log(valu);
        console.log(selector);

        await driver.sleep(5000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(valu);
   
    },
   
    inputMobileNumber: async function(valu) {
        // valu --> raj
        // objectKey --> input field
        var selector = page.pranaScience.elements['mobileNumber']; // //*[@id="login-username relate-pos"]
        console.log(valu);
        console.log(selector);

        await driver.sleep(5000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(valu);
    },
    inputEmailAddress:  async function(valu) {
        // valu --> raj
        // objectKey --> input field
        var selector = page.pranaScience.elements['emailId']; // //*[@id="login-username relate-pos"]
        console.log(valu);
        console.log(selector);

        await driver.sleep(5000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(valu);
    },
    inputNewPassword:  async function(valu) {
        // valu --> raj
        // objectKey --> input field
        var selector = page.pranaScience.elements['newPassword']; // //*[@id="login-username relate-pos"]
        console.log(valu);
        console.log(selector);

        await driver.sleep(5000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(valu);
    },
    inputSecondNewPassword:  async function(valu) {
        // valu --> raj
        // objectKey --> input field
        var selector = page.pranaScience.elements['secondNewPassword']; // //*[@id="login-username relate-pos"]
        console.log(valu);
        console.log(selector);

        await driver.sleep(5000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(valu);
    },
 
    inputGender: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.pranaScience.elements['gender']; // //*[@id="login-username relate-pos"]
        console.log(objectKey);
        console.log(selector);
        await driver.sleep(1000);
          return driver.findElement(selector).sendKeys(objectKey);
    },
    inputAgeRange: async function(valu) {
        // valu --> raj
        // objectKey --> input field
        var selector = page.pranaScience.elements['ageRange']; // //*[@id="login-username relate-pos"]
        console.log(valu);
        console.log(selector);

        await driver.sleep(5000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(valu);
   
    },

};
