const { By } = require("selenium-webdriver");
const helpers = require("../runtime/helpers");
module.exports = {

    url: 'https://www.udemy.com',

    elements: {
        Login: '//a[contains(@href,"/cart/")]',
        Login1: '//*[@id="ybar-inner-wrap"]/div[3]/div/div[3]/div[1]/div/a',
        username: By.id('login-username'),
        nextbtn: '//*[@id="login-signin"]',
        errorMessage: '//*[@id="username-error"]'
    },
    clickElement: async function (keyword) {
        console.log(keyword);
        var selector = page.yahoomail.elements[keyword];
        await driver.sleep(6000);
        // return driver.findElement(selector).click();
        return driver.findElement(By.xpath(selector)).click();
    },
    inputUserName: async function (val) {

        var selector = page.yahoomail.elements['username'];
        await driver.sleep(5000);
        return driver.findElement(selector).sendKeys(val);

    },

    elementExists: async function (keyword) {
        var selector = page.yahoomail.elements[keyword];
        await driver.sleep(6000);
        return driver.findElement(By.xpath(selector));
    }
};

