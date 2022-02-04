const helpers = require("../runtime/helpers");

module.exports = {

    url: 'https://www.pranascience.org/',

    elements: {

            signInButton: '/html/body/app-root/app-master-page/app-header/header/div/div[2]/a',
            signUpButton: '/html/body/app-root/app-auth-login/section/div/div/div[2]/div/div/form/div/div[5]/p/a',
            signInPage:'/html/body',
            signUpButton: '/html/body/app-root/app-auth-login/section/div/div/div[2]/div/div/form/div/div[5]/p/a',
            signUpPage:'/html/body/app-root/app-auth-signup/section',
            firstName: by.name('firstName'),
            lastName: by.name('lastName'),
            countryCode: by.name('countryCode'),
            mobileNumber: by.xpath('//*[@formControlName="mobileNumber"]'),
            email: by.name('email'),
            registerButton: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[10]/button',
            verificationPage:'/html/body/app-root/app-auth-signup/section',
            password: by.xpath('//*[@formControlName="password"]'),
            confirmPassword: by.xpath('//*[@formControlName="confirmPassword"]'),
            gender: by.xpath('//*[@value="female"]') ,
            ageRange:  by.xpath('//*[@formControlName="ageRange"]')

    },

    clickElement: async function(objectKey) {
         
        var selector = page.pranaScience.elements[objectKey];

        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector)).click();
    },
    inputFirstName: async function(val) {
         
        var selector = page.pranaScience.elements['firstName'];  
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);
    },
    inputLastName: async function(val) {
         
        var selector = page.pranaScience.elements['lastName'];  
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);
    },
    inputCountryCode: async function(val) {
        
        var selector = page.pranaScience.elements['countryCode']; 
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);
    },
    inputMobileNumber: async function(val) {
        
        var selector = page.pranaScience.elements['mobileNumber']; 
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);
    },
    inputEmail: async function(val) {
        
        var selector = page.pranaScience.elements['email']; 
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);
    },
    inputPassword: async function(val) {
         
        var selector = page.pranaScience.elements['password'];  
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);

    },
    inputConfirmPassword: async function(val) {
        
        var selector = page.pranaScience.elements['confirmPassword']; 
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);

    },

    inputGender: async function(val) {
         
        var selector = page.pranaScience.elements['gender'];  
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);

    },
    
    inputAgeRange: async function(val) {
         
        var selector = page.pranaScience.elements['ageRange'];  
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);

    },

    elementExists: async function(objectKey) {
         
        var selector = page.pranaScience.elements[objectKey];

        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector));
    }
};