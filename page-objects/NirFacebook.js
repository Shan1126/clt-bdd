const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'http://www.facebook.com',

    elements: {
        username: by.name('email'),
        password: by.name('pass'),
        LoginBtn: '/html/body/div[1]/div[2]/div[1]/div/div/div/div[2]/div/div[1]/form/div[2]/button',
        errorMessage: '//*[@id="email_container"]/div[2]',
        errorMessage2: '//*[@id="loginform"]/div[2]/div[2]'
    },
    clickElement: async function(objectKey) {
        // eslint-disable-next-line no-console
        //LoginBtn
        var selector = page.NirFacebook.elements[objectKey];

        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },
    inputUserName: async function(val) {
        // val --> johndoe
        // objectKey --> input field
        var selector = page.NirFacebook.elements['username']; // //*[@id="login-username relate-pos"]
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(val);

    },
    inputPassword: async function(val) {
        // val --> johndoe
        // objectKey --> input field
        var selector = page.NirFacebook.elements['password']; // //*[@id="login-username relate-pos"]
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(val);

    },
    elementExists: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.NirFacebook.elements[objectKey];

        await driver.sleep(5000);
        console.log('wrong password');
        return driver.findElement(By.xpath(selector));
        
    }
};
