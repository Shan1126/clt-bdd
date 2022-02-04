const { By } = require("selenium-webdriver");
const helpers = require("../runtime/helpers");

module.exports = {
    url: 'https://www.srishtiusa.com/',
    url1: 'https://www.srishtiusa.com/myaccount.asp',
    url2: 'https://www.srishtiusa.com/register.asp?cg=0',

    elements: {

        MyAccount: '//*[@id="menulinks"]/li[3]',
        CreateAccount: '//*[@id="loginAccount"]/div/div/div/div[1]/div[2]/div[2]/button',
        email: By.name('email'),
        password: By.name('pass'),
        FirstName: By.name('shipping_firstname'),
        LastName: By.name('shipping_lastname'),
        Company: By.name('shipping_company'),
        Address: By.name('shipping_address'),
        Suite: By.name('shipping_address2'),
        City: By.name('shipping_city'),
        Country: By.name('shipping_country'),
        Zip: By.name('shipping_zip'),
        Phone: By.name('shipping_phone'),
        TaxID: By.name('tax_id'),
        Comments: By.name('comments'),

    },
    clickElement: async function (objectKey) {
        var selector = page.nirSrishti.elements[objectKey];
        return driver.findElement(By.xpath(selector)).click();
    },

    inputEmail: async function (val) {
        var selector = page.nirSrishti.elements['email']; 
        await driver.sleep(2000); 
        return driver.findElement(selector).sendKeys(val);

    },

    inputPassword: async function (val) {
        var selector = page.nirSrishti.elements['password']; 
        await driver.sleep(2000); 
        return driver.findElement(selector).sendKeys(val);

    },

    inputFirstName: async function (val) {
        var selector = page.nirSrishti.elements['FirstName']; 
        await driver.sleep(2000); 
        return driver.findElement(selector).sendKeys(val);

    },

    inputLastName: async function (val) {
        var selector = page.nirSrishti.elements['LastName']; 
        await driver.sleep(2000); 
        return driver.findElement(selector).sendKeys(val);

    },

    inputCompany: async function (val) {
        var selector = page.nirSrishti.elements['Company']; 
        await driver.sleep(2000); 
        return driver.findElement(selector).sendKeys(val);

    },

    inputAddress: async function (val) {
        var selector = page.nirSrishti.elements['Address']; 
        await driver.sleep(2000); 
        return driver.findElement(selector).sendKeys(val);

    },

    inputSuite: async function (val) {
        var selector = page.nirSrishti.elements['Suite']; 
        await driver.sleep(2000); 
        return driver.findElement(selector).sendKeys(val);

    },
    inputCity: async function (val) {
        var selector = page.nirSrishti.elements['City']; 
        await driver.sleep(2000); 
        return driver.findElement(selector).sendKeys(val);

    },

    selectDropDown: async function (Country, value) {
        var selector = page.nirSrishti.elements[Country];
        await driver.sleep(2000); 
        var element = driver.findElement(By.name(selector));
        return helpers.selectDropdownValueByVisibleText(selector, value);
    },

    inputZip: async function (val) {
        var selector = page.nirSrishti.elements['Zip']; 
        await driver.sleep(2000); 
        return driver.findElement(selector).sendKeys(val);

    },

    inputPhone: async function (val) {
        var selector = page.nirSrishti.elements['Phone']; 
        await driver.sleep(2000); 
        return driver.findElement(selector).sendKeys(val);

    },

    inputTaxID: async function (val) {
        var selector = page.nirSrishti.elements['TaxID']; 
        await driver.sleep(2000); 
        return driver.findElement(selector).sendKeys(val);

    },
    inputComments: async function (val) {
        var selector = page.nirSrishti.elements['Comments']; 
        await driver.sleep(2000); 
        return driver.findElement(selector).sendKeys(val);

    },



};
