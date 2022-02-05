const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://www.cdc.gov/',

    elements: {
        TravelGuidance: '//*[@id="travel"]/span',
        TravelGuidanceEntry: '/html/body/div[10]/main/div[3]/div/div[3]/div/div'
    },
    clickElement: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.cdc.elements[objectKey];
        return driver.findElement(By.xpath(selector)).click();
    },
    elementExists: function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.cdc.elements[objectKey];
        return driver.findElement(By.xpath(selector));
    }
};
