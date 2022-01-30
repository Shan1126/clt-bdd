const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://www.pranascience.org/login',

    elements: { 
        
        signup: '//*[@id="topnav"]/div/div[2]/a',
        LoginHeader1: '/html/body/app-root/app-auth-login/section'
    },
    clickElement: function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.pranaScience.elements[objectKey];
        return driver.findElement(By.xpath(selector)).click();
    },
    elementExists: function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.pranaScience.elements[objectKey];
        return driver.findElement(By.xpath(selector));
    }
};
