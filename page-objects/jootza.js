const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'http://www.jootza.com',

    elements: {
        Login: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a',
        LoginHeader: '/html/body/mdb-root/main/div/app-login/header/section/div/div/div/div/div/div/div[1]/h2/strong'
    },
    clickElement: function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.jootza.elements[objectKey];
        return driver.findElement(By.xpath(selector)).click();
    },
    elementExists: function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.jootza.elements[objectKey];
        return driver.findElement(By.xpath(selector));
    }
};
