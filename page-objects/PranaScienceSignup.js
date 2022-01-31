const helpers = require("../runtime/helpers");


module.exports = {

    url: 'https://www.pranascience.org/',

    elements: {
        SignIn: '//*[@id="topnav"]/div/div[2]/a',
        SignUp: '/html/body/app-root/app-auth-login/section/div/div/div[2]/div/div/form/div/div[5]/p/a',
        SignUpPage: '/html/body/app-root/app-auth-signup/section',
        firstName: by.name('firstName'),
        lastName: by.name('lastName'),
        countryCode: by.name('countryCode'),
        mobileNumber: by.xpath('//*[@formControlName="mobileNumber"]'),
        email: by.name('email'),
        password: by.xpath('//*[@formControlName="password"]'),
        confirmPassword: by.xpath('//*[@formControlName="confirmPassword"]'),
        gender: by.xpath('//*[@value="female"]') ,
        ageRange: by.xpath('//*[@formControlName="ageRange"]'),
        register: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[10]/button',
        registerationResult:'/html/body/app-root/app-auth-signup/section'
    },

    clickElement: async function (objectKey) {

        var selector = page.PranaScienceSignup.elements[objectKey];
        await driver.sleep(2000);
        var element = driver.findElement(By.xpath(selector));
        return driver.executeScript('return arguments[0].click();',element);
    },
    
    inputFirstName: async function(val) {
        var selector = page.PranaScienceSignup.elements['firstName'];
        await driver.sleep(1000);
        return driver.findElement(selector).sendKeys(val)
    },
    
    inputLastName: async function(val) {
        var selector = page.PranaScienceSignup.elements['lastName'];
        await driver.sleep(1000);
        return driver.findElement(selector).sendKeys(val)
    },

    inputCountryCode: async function(val) {

        var selector = page.PranaScienceSignup.elements['countryCode']; 
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);
    },

    inputMobileNumber: async function(val){
        var selector = page.PranaScienceSignup.elements['mobileNumber'];
        await driver.sleep(1000);
        return driver.findElement(selector).sendKeys(val)
    },
    
    inputEmail: async function(val){
        var selector = page.PranaScienceSignup.elements['email'];
        await driver.sleep(1000);
        return driver.findElement(selector).sendKeys(val);
    },
    
    inputPassword: async function(val){
        var selector = page.PranaScienceSignup.elements['password'];
        await driver.sleep(1000);
        return driver.findElement(selector).sendKeys(val);

    },
    inputConfirmPassword: async function(val){
        var selector = page.PranaScienceSignup.elements['confirmPassword'];
        await driver.sleep(1000);
        return driver.findElement(selector).sendKeys(val);
    }, 

    inputGender: async function(val) {
        var selector = page.PranaScienceSignup.elements['gender'];  
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);
    },

    inputAgeRange: async function(val) {

        var selector = page.PranaScienceSignup.elements['ageRange'];  
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);

    },

    elementExists: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.PranaScienceSignup.elements[objectKey];
        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector));
    }

};
