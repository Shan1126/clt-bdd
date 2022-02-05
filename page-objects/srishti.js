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
        City: '//*[@id="shipping_city"]',
        Country: '//*[@name="shipping_country"]',
        State: '//*[@id="spanState"]/select',
        Zip: '//*[@id="registrationform"]/div[2]/div/div[2]/div[1]/div/div[9]/label/input',
        Phone: '//*[@id="shipping_phone"]',
        TaxID: '//*[@id="tax_id"]',
        Comments: '//*[@name="comments"]',
        REGISTER: '//*[@id="registrationform"]/div[3]/div/div[2]/button',
        LoginError: '/html/body/div/section[2]/div/h1'
    },

    clickElement: async function (objectKey) {

        var selector = page.srishti.elements[objectKey];
        await driver.sleep(2000);
        var element = driver.findElement(By.xpath(selector));
        return driver.executeScript('return arguments[0].click();', element);
    },

    inputData: async function (textboxElementName, value) {
        var selector = page.srishti.elements[textboxElementName];
        await driver.sleep(2000); 
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

     //DropDown function
     selectDD: async function (selectName, value) {
        var selector = page.srishti.elements[selectName];
        await driver.sleep(2000); 
        return helpers.selectDropdownValueByVisibleText(selector, value);
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
