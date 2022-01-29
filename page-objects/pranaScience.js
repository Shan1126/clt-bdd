const { By } = require("selenium-webdriver");
const helpers = require("../runtime/helpers");
module.exports = {

    url: 'https://pranascience.com/',

    elements: {
        register: '//*[@id="header"]/div[1]/div/div/div/div/a[2]',
        username: '//*[@id="stm-lms-register"]/form/div[1]/div[1]/div/input',
        email: '//*[@id="stm-lms-register"]/form/div[1]/div[2]/div/input',
        password: '//*[@id="stm-lms-register"]/form/div[2]/div[1]/div/input',
        confirmPassword: '//*[@id="stm-lms-register"]/form/div[2]/div[2]/div/input',
        confirmRegister: '//*[@id="stm-lms-register"]/form/div[3]/div/div/button'
    },
    clickElement: async function (keyword) {
        console.log(keyword);
        var selector = page.pranaScience.elements[keyword];
        console.log(selector);
        // return driver.findElement(selector).click();
        return driver.findElement(By.xpath(selector)).click();
    },
    inputUserName: async function (val) {

        var selector = page.pranaScience.elements['username'];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);

    },
    inputEmail: async function (val) {

        var selector = page.pranaScience.elements['email'];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);

    },
    inputPassword: async function (val) {

        var selector = page.pranaScience.elements['password'];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);
    },
    inputConfirmpassword: async function (val) {

        var selector = page.pranaScience.elements['confirmPassword'];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);
    },
    

};
