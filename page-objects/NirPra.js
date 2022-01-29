const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://www.pranascience.org/auth-signup',
    abc1: 'https://www.pranascience.org/page-aboutus',
    abc2: 'https://www.pranascience.org/how-it-works',
    abc3: 'https://www.pranascience.org/books',
    abc4: 'https://www.pranascience.org/login',
    abc5: 'https://www.pranascience.org/index',
    Value1: 'Firstname',
    
    elements: {
        AboutUs:'//*[@id="navigation"]/ul/li[2]/a',
        HowItWork: '//*[@id="navigation"]/ul/li[3]/a',
        Books: '//*[@id="navigation"]/ul/li[4]/a',
        Login: '//*[@id="navigation"]/ul/li[5]/a',
        Home: '//*[@id="navigation"]/ul/li[1]/a',
        FirstName: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[1]/div/input',
    },

elementExists: async function(objectKey) {
    // eslint-disable-next-line no-console
    var selector = page.NirPra.elements[objectKey];
    return driver.findElement(By.xpath(selector));
},
inputUserName: async function (value1) {
    // val --> johndoe
    // objectKey --> input field
    var selector = page.NirPra.elements['PagEle']; // //*[@id="login-username relate-pos"]
    
    return driver.findElement(selector).sendKeys(val);
},
clickElement: async function(objectKey) {
    // eslint-disable-next-line no-console
    //LoginBtn
    var selector = page.NirPra.elements[objectKey];
    await driver.sleep(5000);
    return driver.findElement(By.xpath(selector)).click();
},
};