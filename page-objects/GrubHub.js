
const helpers = require("../runtime/helpers");
module.exports = {

    url: 'https://www.grubhub.com/',

    elements: {
        Dismiss :'//*[@id="chiri-modal"]/div/div/div[2]/div[3]/a',
        SignIn : '//*[@id="homepage-logged-out-top"]/span[2]/div/div[2]/div[1]/div/h4[2]/a',
        Email : '//*[@id="email"]',
        Password : '//*[@id="password"]',
        SignInBtn : '//*[@id="ghs-outerWrapper"]/div/ghs-router-outlet/span/span/div/div/span/div/div/span/span/span/form/span/div/div[3]/div/button',
        SignInError : '//*[@id="ghs-outerWrapper"]/div/ghs-router-outlet/span/span/div/div/span/div[1]/div',
        Close   :'//*[@id="chiri-modal"]/div/div/div[1]/a',
        OrderFoodDelivery :'//*[@id="homepage-logged-out-top"]/span[2]/div/div[2]/div[2]/div[2]/span/div/div[1]/div/span/ghs-address-input/div/div/div/input',
        FindFoodBtn : '//*[@id="homepage-logged-out-top"]/span[2]/div/div[2]/div[2]/div[2]/span/div/div[2]/button',
        Result  : '//*[@id="ghs-search-results-container"]/div/div[2]/div/div/span/ghs-search-results/div[1]/div',
        SignUpEmail : '//*[@id="wby1BRTynI2quk0CAGou6"]',
        SignUpZcode : '//*[@id="3aXcBgG5WgW8WK0IagIIco"]',
        CountMeInBtn : '//*[@id="brontoFormWrapper"]/div/a',
        SignUpResult : '//*[@id="brontoFormWrapper"]/div/div[2]',
        SignUpForSpecialOffers : '//*[@id="homepage-preFooter"]/div/div[1]/div[1]',
        Dismiss : '//*[@id="chiri-modal"]/div/div/div[2]/div[2]/a[2]',
    },


    

    clickElement: async function (objectKey) {
        var selector = page.GrubHub.elements[objectKey];
        await driver.sleep(2000);
        var element = driver.findElement(By.xpath(selector));
        return driver.executeScript('return arguments[0].click();', element);
    },

    inputTextBoxData: async function (textboxElementName, value) {
        var selector = page.GrubHub.elements[textboxElementName];
        await driver.sleep(1000); // in millseconds 1000ms = 1 second
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    
    scrollto: async function (val) {
        var selector = page.GrubHub.elements['SignUpForSpecialOffers'];
        await driver.sleep(1000);
        return helpers.scrollToElement(driver.findElement(By.xpath(selector)));
        //line:251 in helpers.js
        // return driver.executeScript('return arguments[0].scrollIntoView(false);', element);
        //so the selected element is at the bottom of the visible area
    },

    elementExists: async function (objectKey) {
        var selector = page.GrubHub.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector));
    }
};


