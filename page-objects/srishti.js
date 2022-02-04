const helpers = require("../runtime/helpers");
module.exports = {

    url: 'http://www.srishtiusa.com',

    elements: {
        Login: '/html/body/section[1]/div/div/div[2]/div[1]/ul/li/a',
        CreateAccount: '//*[@id="loginAccount"]/div/div/div/div[1]/div[2]/div[2]/button',
        CreateAccountPage: '/html/body/div[1]/section[2]/div/h1',
        Email: '//*[@id="registrationform"]/div[1]/div[1]/div[2]/div[1]/label/input',
        Password: '//*[@id="registrationform"]/div[1]/div[1]/div[2]/div[2]/label/input',
        Firstname:'//*[@id="shipping_firstname"]',
        Lastname: '//*[@id="shipping_lastname"]',
        Company: '//*[@id="shipping_company"]',
        Address: '//*[@id="shipping_address"]',
        AptNo: '//*[@id="shipping_address2"]',
        City: '//*[@id="shipping_city"]',//*[@id="shipping_city"]
        Country: '//*[@name="shipping_country"]',
        State: '//*[@id="spanState"]/select',
        Zip: '//*[@id="registrationform"]/div[2]/div/div[2]/div[1]/div/div[9]/label/input',
        Phone: '//*[@id="shipping_phone"]',
        TaxID: '//*[@id="tax_id"]',
        Comments: '//*[@name="comments"]',//*[@id="registrationform"]/div[2]/div/div[2]/div[2]/label/textarea
        REGISTER: '//*[@id="registrationform"]/div[3]/div/div[2]/button',
        LoginError: '/html/body/div/section[2]/div/h1'

    },

    clickElement: async function (objectKey) {

        var selector = page.srishti.elements[objectKey];
        await driver.sleep(2000);
        var element = driver.findElement(By.xpath(selector));
        return driver.executeScript('return arguments[0].click();', element);
    },

    inputEmail: async function (value) {
        var selector = page.srishti.elements['Email'];
        await driver.sleep(2000); 
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    inputPW: async function (value) {
        var selector = page.srishti.elements['Password'];
        await driver.sleep(2000); 
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    inputFN: async function (value) {
        var selector = page.srishti.elements['Firstname'];
        await driver.sleep(2000); 
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    inputLN: async function (value) {
        var selector = page.srishti.elements['Lastname'];
        await driver.sleep(2000); 
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

   
    inputComp: async function (value) {
        var selector = page.srishti.elements['Company'];
        await driver.sleep(2000); 
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    inputAddr: async function (value) {
        var selector = page.srishti.elements['Address'];
        await driver.sleep(2000); 
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    inputAptNo: async function (value) {
        var selector = page.srishti.elements['AptNo'];
        await driver.sleep(2000); 
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    inputCity: async function (value) {
        var selector = page.srishti.elements['City'];
        await driver.sleep(2000); 
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    selectDropDownC: async function (value) {
        var selector = page.srishti.elements['Country'];
        await driver.sleep(2000); 
        var element = driver.findElement(By.xpath(selector));
        return helpers.selectDropdownValueByVisibleText(selector, value);
    },

    selectDropDownS: async function (value) {
        var selector = page.srishti.elements['State'];
        await driver.sleep(2000); 
        var element = driver.findElement(By.xpath(selector));
        return helpers.selectDropdownValueByVisibleText(selector, value);
    },

    inputZip: async function (value) {
        var selector = page.srishti.elements['Zip'];
        await driver.sleep(2000); 
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    inputPhone: async function (value) {
        var selector = page.srishti.elements['Phone'];
        await driver.sleep(2000); 
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },   

    inputTaxID: async function (value) {
        var selector = page.srishti.elements['TaxID'];
        await driver.sleep(2000); 
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    inputComments: async function (value) {
        var selector = page.srishti.elements['Comments'];
        await driver.sleep(2000); 
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    scrollto: async function (val) {

        var selector = page.srishti.elements['REGISTER'];
        await driver.sleep(2000);
        return helpers.scrollToElement(driver.findElement(By.xpath(selector)));
        //line:251 in helpers.js
        // return driver.executeScript('return arguments[0].scrollIntoView(false);', element);
        //so the selected element is at the bottom of the visible area

    },

    elementExists: async function (objectKey) {
        var selector = page.srishti.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    }
};