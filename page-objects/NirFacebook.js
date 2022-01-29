const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'http://www.facebook.com',
    xyz1: 'https://www.facebook.com/reg/',
    xyz2: 'https://www.facebook.com/login/',
    xyz3: 'https://www.messenger.com/',
    url1: 'https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjQzMzQ5OTcxLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D',

    elements: {
        username: by.name('email'),
        password: by.name('pass'),
        LoginBtn: '/html/body/div[1]/div[2]/div[1]/div/div/div/div[2]/div/div[1]/form/div[2]/button',
        ForgotPass: '//*[@id="u_0_a_sE"]/div[3]/a',
        errorMessage: '//*[@id="email_container"]/div[2]',
        errorMessage1: '/html/body/div[1]/div[2]/div[1]/div/div[2]/div[2]/form/div/div[1]/div[2]',
        SignUp: '//*[@id="pageFooterChildren"]/ul/li[1]/a',
        Messenger: '//*[@id="pageFooterChildren"]/ul/li[3]/a',
        Watch: '//*[@id="pageFooterChildren"]/ul/li[5]/a',
        LogIn: '//*[@id="pageFooterChildren"]/ul/li[2]/a',
        ForgotPasswordPage: '/html/body/div[1]/div[2]/div[1]/div/div[2]/div/div/form/div/div[2]/div/table/tbody/tr[2]/td[2]/input'
    },
    clickElement: async function(objectKey) {
        // eslint-disable-next-line no-console
        //LoginBtn
        var selector = page.NirFacebook.elements[objectKey];
        return driver.findElement(By.xpath(selector)).click();
    },
    inputUserName: async function (val) {
        // val --> johndoe
        // objectKey --> input field
        var selector = page.NirFacebook.elements['username']; // //*[@id="login-username relate-pos"]
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(val);

    },
    inputPassword: async function (val) {
        // val --> johndoe
        // objectKey --> input field
        var selector = page.NirFacebook.elements['password']; // //*[@id="login-username relate-pos"]
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(val);

    },
    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.NirFacebook.elements[objectKey];

        await driver.sleep(5000);
        return driver.findElement(By.xpath(objectKey));

    }
};
