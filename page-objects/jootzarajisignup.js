const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'http://www.jootza.com',

    elements: {
        Login: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a',
        LoginHeader: '/html/body/mdb-root/main/div/app-login/header/section/div/div/div/div/div/div/div[1]/h2/strong',
        UN: '//*[@id="login-username relate-pos"]',
        PW: '//*[@id="login-password relate-pos"]',
        LoginBtn: '//*[@id="btn-login"]/button',
        ErrorMsg: '//*[@id="toast-container"]/mdb-toast-component/div',
        "REGISTER NOW": '//*[@id="bs-example-navbar-collapse-1"]/ul/li[1]/a',
        REGISTER: '/html/body/mdb-root/main/div/app-signup/header/section/div/div/div/div/div/div/h2/strong',
        AccessCode: '//*[@id="accessCode"] ',
        FirstName: '//*[@id="firstName"]',
        LastName: '//*[@id="lastName"]',
        Email: '//*[@id="email"]',
        UserName: '//*[@id="username"]',
        Password: '//*[@id="login-password"]',
        SignupBtn: '//*[@id="btn-login"]/button',
        ErrorMessage: '//*[@id="toast-container"]/mdb-toast-component/div',
        SubscribeOurNewsLetter: '//*[@id="main"]/div[7]/div/h1',
        EmailAddress: '//*[@id="email"]',
        SubscribeBtn: '//*[@id="main"]/div[7]/div/div/form/div[1]/input[2]',
        ThankYouMessage: '//*[@id="main"]/div[7]/div/div/form/div[2]'
    },

    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        //LoginBtn
        var selector = page.jootzarajisignup.elements[objectKey];

        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

    inputData: async function (field, val) {
        var selector = page.jootzarajisignup.elements[field];
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(By.xpath(selector)).sendKeys(val);
    },

    inputAccessCode: async function (val) {
        // val --> 123456
        var selector = page.jootzarajisignup.elements['AccessCode'];
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(By.xpath(selector)).sendKeys(val);
    },

    inputEmailAddr: async function (val) {
        // val --> 123456
        var selector = page.jootzarajisignup.elements['EmailAddress'];
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(By.xpath(selector)).sendKeys(val);

    },

    inputFirstName: async function (val) {
        // val --> Raji
        var selector = page.jootzarajisignup.elements['FirstName'];
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(By.xpath(selector)).sendKeys(val);

    },

    inputLastName: async function (val) {
        // val --> Guna
        var selector = page.jootzarajisignup.elements['LastName'];
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(By.xpath(selector)).sendKeys(val);

    },

    scrollto: async function (val) {

        var selector = page.jootzarajisignup.elements['SubscribeOurNewsLetter'];
        await driver.sleep(2000);
        return helpers.scrollToElement(driver.findElement(By.xpath(selector)));
    },

    // scrolltoEA: async function(val) {
    //  var selector = page.jootzarajisignup.elements['EmailAddress']; 
    //   await driver.sleep(2000); 
    //   return helpers.scrollToElement(driver.findElement(By.xpath(selector)));
    //  },

    inputEmail: async function (val) {
        // val --> rajiguna@abc.com
        var selector = page.jootzarajisignup.elements['Email'];
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(By.xpath(selector)).sendKeys(val);

    },

    inputUserName: async function (val) {
        // val --> rajiguna
        var selector = page.jootzarajisignup.elements['UserName'];
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(By.xpath(selector)).sendKeys(val);

    },
    inputPassword: async function (val) {
        // val --> password123
        // objectKey --> input field
        var selector = page.jootzarajisignup.elements['Password'];
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(By.xpath(selector)).sendKeys(val);

    },

    inputUN: async function (val) {
        // val --> rajiguna
        var selector = page.jootzarajisignup.elements['UN'];
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(By.xpath(selector)).sendKeys(val);

    },
    inputPW: async function (val) {
        // val --> password123
        // objectKey --> input field
        var selector = page.jootzarajisignup.elements['PW'];
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(By.xpath(selector)).sendKeys(val);

    },


    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.jootzarajisignup.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    }
};
