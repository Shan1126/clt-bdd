const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://www.pranascience.org/auth-signup',
    abc1: 'https://www.pranascience.org/page-aboutus',
    abc2: 'https://www.pranascience.org/how-it-works',
    abc3: 'https://www.pranascience.org/books',
    abc4: 'https://www.pranascience.org/login',
    abc5: 'https://www.pranascience.org/index',
    Value1: 'Firstname',
    

    elements: {
        username: by.name('firstName'),
        AboutUs: '//*[@id="navigation"]/ul/li[2]/a',
        HowItWork: '//*[@id="navigation"]/ul/li[3]/a',
        Books: '//*[@id="navigation"]/ul/li[4]/a',
        Login: '//*[@id="navigation"]/ul/li[5]/a',
        Home: '//*[@id="navigation"]/ul/li[1]/a',
        FirstName: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[1]/div/input',
        Signin: '//*[@id="navigation"]/ul/li[5]/a',
        Signup: '/html/body/app-root/app-auth-login/section/div/div/div[2]/div/div/form/div/div[5]/p/a',
        SignupPage: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/h4',
        FName: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[1]/div/input',
        LName: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[2]/div/input',
        countryCode: by.name('countryCode'),
        MobileNumber: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[4]/div/input',
        Email: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[5]/div/input',
        PWord: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[6]/div/input',
        ageRange: by.xpath('//*[@formControlName="ageRange"]'),
        ConfirmPW: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[7]/div/input',
        gender: by.xpath('//*[@value="female"]') ,
        Register: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[10]/button',
        Sendverification: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/h4',
    },

    inputUserName: async function (val) {

        var selector = page.NirPra.elements['firstName']; // //*[@id="login-username relate-pos"]
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(val);
    },
    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.NirPra.elements[objectKey];
        return driver.findElement(By.xpath(selector));
    },
    inputUserName: async function (value1) {
        // val --> johndoe
        // objectKey --> input field
        var selector = page.NirPra.elements['PagEle']; // //*[@id="login-username relate-pos"]

        return driver.findElement(selector).sendKeys(val);
    },
    inputCountryCode: async function(val) {

        var selector = page.NirPra.elements['countryCode']; 
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);
    },
    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        //LoginBtn
        var selector = page.NirPra.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector)).click();
    },
  
    clickElement: async function (objectKey) {

        var selector = page.NirPra.elements[objectKey];
        await driver.sleep(2000);
        var element = driver.findElement(By.xpath(selector));
        return driver.executeScript('return arguments[0].click();', element);
    },
    inputTextBoxData: async function (textboxElementName, value) {
        var selector = page.NirPra.elements[textboxElementName];
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },
    selectDropDown: async function (selectName, value) {
        var selector = page.NirPra.elements[selectName];
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return helpers.selectDropdownValueByVisibleText(selector, value);
    },
    verification: async function (objectKey) {
        var selector = page.NirPra.elements['Sendverification'];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },
  
    inputAgeRange: async function(val) {

        var selector = page.NirPra.elements['ageRange'];  
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);

    },
    inputGender: async function(val) {
        var selector = page.NirPra.elements['gender'];  
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);
    },
};