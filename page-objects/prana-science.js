const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://www.pranascience.org',

    elements: { 
        Signin: '//*[@id="topnav"]/div/div[2]/a',
        LoginHeader1: '/html/body/app-root/app-auth-login/section'
    },
    clickElement: function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.pranascience.elements[objectKey];
        return driver.findElement(By.xpath(selector)).click();
    },
    elementExists: function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.pranascience.elements[objectKey];
        return driver.findElement(By.xpath(selector));
    }
};
