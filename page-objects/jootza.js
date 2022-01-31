const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'http://www.jootza.com',

    elements: {
        Login: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a',
        LoginHeader: '/html/body/mdb-root/main/div/app-login/header/section/div/div/div/div/div/div/div[1]/h2/strong',
        username: by.name('username'),
        password: by.name('password'),
        LoginBtn: '//*[@id="btn-login"]/button',
        errorMessage: '//*[@id="toast-container"]/mdb-toast-component/div'
    },
    clickElement: async function(objectKey) {
        // eslint-disable-next-line no-console
        //LoginBtn
        var selector = page.jootza.elements[objectKey];

        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },
    inputUserName: async function(val) {
        // val --> johndoe
        // objectKey --> input field
        var selector = page.jootza.elements['username']; // //*[@id="login-username relate-pos"]
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(val);
    },
    inputPassword: async function(val) {
        // val --> johndoe
        // objectKey --> input field
        var selector = page.jootza.elements['password']; // //*[@id="login-username relate-pos"]
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(val);

    },
    elementExists: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.jootza.elements[objectKey];

        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    }
};
