const helpers = require("../runtime/helpers");

module.exports = {
    url: 'https://www.science.org/',
    url1: 'https://www.science.org/news',

    elements: {

        news: '//*[@id="menu-item-0"]',

    },
    clickElement: async function(objectKey) {
        var selector = page.science.elements[objectKey];
        return driver.findElement(By.xpath(selector)).click();
    },
    
        };
