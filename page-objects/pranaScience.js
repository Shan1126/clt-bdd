const helpers = require("../runtime/helpers");
module.exports = {

    url: 'http://www.pranascience.org',

    elements: {
        signinBtn: '//a[contains(@href,"/login")]',
        signupBtn: '//a[contains(@href,"/auth-signup")]',
        signupPage: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/h4',
        fName: '//*[@formcontrolname="firstName"]',
        lName: '//*[@formcontrolname="lastName"]',
        countryCode: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[3]/div/select',
        mobileNumber: '//*[@formcontrolname="mobileNumber"]',
        emailId: '//*[@formcontrolname="email"]',
        passWord: '//*[@formcontrolname="password"]',
        ageRange: '//*[@formcontrolname="ageRange"]',
        confirmPassword: '//*[@formcontrolname="confirmPassword"]',
        optionFemale: '//*[@id="male"]',
        registerBtn: '//*[@class="btn btn-primary btn-block"]',
        emailExists: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[10]/div'
    },

    clickElement: async function (objectKey) {

        var selector = page.pranaScience.elements[objectKey];
        await driver.sleep(2000);
        var element = driver.findElement(By.xpath(selector));
        return driver.executeScript('return arguments[0].click();', element);
    },

    inputTextBoxData: async function (textboxElementName, value) {
        var selector = page.pranaScience.elements[textboxElementName];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    selectDropDown: async function (selectName, value) {
        var selector = page.pranaScience.elements[selectName];
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        var element = driver.findElement(By.xpath(selector));
        return helpers.selectDropdownValueByVisibleText(selector, value);
    },

    elementExists: async function (objectKey) {
        var selector = page.pranaScience.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    }
};
