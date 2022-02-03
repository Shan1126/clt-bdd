const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'http://www.amazon.com',

    elements: {

        BestSellers: '//*[@id="nav-xshop"]/a[1]',
        AmazonBasics:'//*[@id="nav-xshop"]/a[2]',
        NewReleases: '//*[@id="nav-xshop"]/a[3]',
        CustomerService:'//*[@id="nav-xshop"]/a[4]',
        TodaysDeals: '//*[@id="nav-xshop"]/a[5]',
        AmazonBestSellers: '//*[@id="zg_banner_text"]',
        abasics: '/html/body/div[1]/div[2]/div/div[2]/div/div/div/div/div[3]/div[1]/div[2]/a/img',
        AmazonNewReleases:'//*[@id="zg_banner_text"]',
        CustomerServicePage: '//*[@id="a-page"]/div[2]/div[1]/h1',
        AmazonTodaysDeals: '//*[@id="a-page"]/div[6]/div[1]/div/div/h1'

    },

    clickElement: async function (objectKey) {
        var selector = page.msect.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.msect.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    }

};
