const helpers = require("../../bdd-exercise/runtime/helpers");

module.exports = {

    url: 'https://www.wellsfargo.com/',

    elements: {
        CustomerService: '//*[@id="topSearch"]/ul/li[3]/a',
        CustomerServicePage:'/html/body' 
    },
    clickElement: async function(objectKey) {
        
        var selector = page.wellsFargo.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },
    
    elementExists: async function(objectKey) {
        var selector = page.wellsFargo.elements[objectKey];
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector));
    }
};
  