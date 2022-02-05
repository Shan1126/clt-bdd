const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'http://www.pranascience.org',

    elements: {
        Signin: '//*[@id="navigation"]/ul/li[5]/a',
        Signup: '/html/body/app-root/app-auth-login/section/div/div/div[2]/div/div/form/div/div[5]/p/a',
        SignupPage: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/h4',
        FName: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[1]/div/input',
        LName: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[2]/div/input',
        CountryCode: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[3]/div/select',
        MobileNumber: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[4]/div/input',
        Email: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[5]/div/input',
        PWord: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[6]/div/input',
        AgeRange: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[9]/div/select',
        ConfirmPW: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[7]/div/input',
        Female: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[8]/div[2]/input',
        Register: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[10]/button',
        EmailExists: '/html/body/app-root/app-auth-signup/section/div/div/div[1]/div/div/form/div/div[10]/div'
    },

    clickElement: async function (objectKey) {

        var selector = page.rprana.elements[objectKey];
        await driver.sleep(2000);
        var element = driver.findElement(By.xpath(selector));
        return driver.executeScript('return arguments[0].click();', element);
    },

}