const { By } = require("selenium-webdriver");
const { scrollToPageBottom } = require("../runtime/helpers");
const helpers = require("../runtime/helpers");
module.exports = {

    url: 'https://www.collegeboard.com',

    elements: {
        accuplacerLink: '//a[contains(@href,"https://accuplacer.collegeboard.org/students")]',
        helpfulBtn: by.name('sgE-3485729-5-5'),
        improveTxt: '//*[@id="sgE-3485729-5-7-element"]',
        submitBtn: '//*[@id="sg_SubmitButton"]',
        thankyouResponse: '//*[@id="sgE-3485729-2-1-box"]/div',
        bigFutureLink: '//a[contains(@href,"https://accuplacer.collegeboard.org/students")]',
        findCollegesLink: '//*[@id="bf-build-college-list-card-button"]',
        location: '//*[@id="apricot_hR3VI"]',
        collegeLocation: '//*[@id="cs-proximity-option-usa"]',
        collegesinState: '//*[@id="location-by-state-typeahead-input"]',
        optionMaryland: '//*[@id="md-option-mfe-id"]',
        continueBtn: '//*[@id="cs-bare-modal-container-proximity-filter-modal"]/div[3]/div/div/div/button[2]',
        showCollegesBtn: '//*[@id="cs-bare-modal-container-proximity-filter-modal"]/div[3]/div/div/div/button[2]',
        collegesList: '//*[@id="MFE:college-search-filters"]/div/div/div[4]/div/div/div/div/h1'
    },
    clickElement: async function (objectKey) {
        var selector = page.collegeBoard.elements[objectKey];
        await driver.sleep(7000);
        var element = driver.findElement(By.xpath(selector));

        return driver.executeScript('return arguments[0].click();', element);
    },
    scrollToPageBottom: async function () {
        await driver.sleep(7000);
        console.log("scrolldown");
        driver.executeScript("window.scrollTo(0, 500)");
        console.log("scrolled");
    },
    inputTextBoxData: async function (textboxElementName, value) {
        var selector = page.collegeBoard.elements[textboxElementName];
        await driver.sleep(7000);
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },
    elementExists: async function (objectKey) {
        var selector = page.collegeBoard.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },
    selectOption: async function () {
        var selector = page.collegeBoard.elements['helpfulBtn'];
        await driver.sleep(7000);
        return driver.findElement(selector).click();

    },
}
