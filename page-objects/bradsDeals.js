const helpers = require("../runtime/helpers");
module.exports = {

    url: 'https://www.bradsdeals.com',

    elements: {
        myDeals: '//a[contains(@href,"/shop")]',
        exclusiveDeals:'//*[@id="__layout"]/div/main/div/div[2]/div[1]/div[1]/h2',
        dealAlerts:'//a[contains(@href,"/deal-alerts")]',
        dealAlertText:'/html/body/div[2]/div[1]/div/div/h1',
        coupons:'//*[@id="__layout"]/div/header/div/nav/div[1]/div/div[1]/div/ul/li[4]/button'

    },

    clickElement: async function (keyword) {
        var selector = page.bradsDeals.elements[keyword];
        console.log(selector);
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector)).click();
    },
    elementExists: async function (objectKey) {
        var selector = page.bradsDeals.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    }
    

};
