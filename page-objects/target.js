const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'http://www.target.com',

    elements: {
        Registry: '//*[@id="header"]/div[1]/div[2]/div/div[1]/ul/li[1]/a',
        RegistryHeader: '//*[@id="__next"]/div[3]/div/div[1]/div[1]/h1'
    },
    clickElement: function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.target.elements[objectKey];
        return driver.findElement(By.xpath(selector)).click();
    },
    elementExists: function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.target.elements[objectKey];
        return driver.findElement(By.xpath(selector));
    }
};
