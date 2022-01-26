const helpers = require("../runtime/helpers");
//const { driver } = require("selenium-webdriver/chrome");


module.exports = {

    url: 'https://www.wellsfargo.com/',

    elements: {
        Enroll:'//*[@id="topSearch"]/ul/li[1]/a',
        Enrollscreen:'//*[@id="root"]/div/div/div[2]/div/div/div/div[2]/div[1]/div/div/div/div/div/div[1]/h1/span'
    },
    
    clickElement:async function(keyword) {
        var sel = page.wellsfargo.elements[keyword];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(sel)).click();
    },

    elementExists:async function(objectkey) {
        var input= page.wellsfargo.elements[objectkey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(input));
    },
   








}
