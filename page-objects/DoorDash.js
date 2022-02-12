const helpers = require("../runtime/helpers");
module.exports = {

    url: 'https://www.doordash.com/',

    elements: {
        SignIn         :'//*[@id="__next"]/div[3]/div[1]/div/div[1]/div/button[1]/div/div/div/span/span',
        SEmail         : '//*[@id="FieldWrapper-2"]',
        SPassword      : '//*[@id="FieldWrapper-3"]',
        SignInBtn      : '//*[@id="login-submit-button"]/div/div/div/span',
        ErrMessage     :'//*[@id="login-form"]/div[4]/div[1]/div/div/div',
        SignUp         : '//*[@id="__next"]/div[3]/div[1]/div/div[1]/div/button[2]/div/div/div/span',
        SignUpPage     : '//*[@id="root"]/div/div[1]/div/div[2]/div',
        FirstName      : '//*[@id="FieldWrapper-6"]',
        LastName       : '//*[@id="FieldWrapper-7"]',
        Email          : '//*[@id="FieldWrapper-8"]',
        Country        : '//*[@id="FieldWrapper-9"]',
        MobileNumber   : '//*[@id="FieldWrapper-10"]',
        Password       : '//*[@id="FieldWrapper-11"]',
        SignUpBtn      : '//*[@id="sign-up-submit-button"]/div/div/div/span',
        errorMessage   : '//*[@id="signup-form"]/div[6]/div/div/div/div/span',
        EnterDeliveryA : '//*[@id="FieldWrapper-1"]',
        ArrowIcon      : '//*[@id="__next"]/div[3]/div[1]/div/div[2]/div/div[3]/div/div/div/form/div/div/div/div/div[3]/div/button',
        Result         : '//*[@id="root"]/div[1]',


    },

    clickElement: async function (objectKey) {

        var selector = page.DoorDash.elements[objectKey];
        await driver.sleep(2000);
        var element = driver.findElement(By.xpath(selector));
        return driver.executeScript('return arguments[0].click();', element);
    },

    inputTextBoxData: async function (textboxElementName, value) {
        var selector = page.DoorDash.elements[textboxElementName];
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    

    elementExists: async function (objectKey) {
        var selector = page.DoorDash.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    }
};





