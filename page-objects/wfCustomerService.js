const helpers = require("../runtime/helpers");

module.exports = {

    wfUrl: 'https://www.wellsfargo.com/',
    
    elements: {
        customerService: '/html/body/div/header/div/div[1]/div/div[2]/ul/li[2]/a',
        customerServicePage: '//*[@id="shell"]',
        learnMore:'//*[@data-cid="tcm:84-195982-16"]',
        COVID19ResourcesSupport: '//*[@id="shell"]',
        createPasswordOrFindUsername: '//*[@id="howdoicreateanewpasswordorfindmyusername"]',
        createPasswordOrFindUsernamePage: '/html/body/div[1]/div[5]/div/div[1]/div[3]/div',
        requestStopPaymentCheck: '//*[@id="howdoicreateanewpasswordorfindmyusername"]',
        requestStopPaymentCheckPage: '//*[@id="NID1_9_1_1_5_2"]',
        isFeeForZelle: '//*[@id="NID1_e68db0b5ecb1614"]',
        isFeeForZellePage: '//*[@id="NID1_9_1_1_6_2"]',

    },

    clickElement: async function(objectKey) {
        
        var selector = page.wfCustomerService.elements[objectKey];
        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector)).click();
    },

    elementExists: async function(objectKey) {
        var selector = page.wfCustomerService.elements[objectKey];
        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector));
        await driver.sleep(1000);
    },


};
