const helpers = require("../../bdd-exercise/runtime/helpers");

module.exports = {

    url: 'https://www.wellsfargo.com/',

    elements: {
        CustomerService: '//*[@id="topSearch"]/ul/li[3]/a',
        CustomerServicePage:'/html/body',
        Enroll: '/html/body/div/header/div/div[1]/div/div[2]/ul/li[1]/a',
        EnrollPage: '/html/body',
        ATMsLocations: '/html/body/div/header/div/div[1]/div/div[2]/ul/li[3]/a',
        ATMsLocationsPage: '/html/body',
        username: by.name('j_username'),
        password: by.name('j_password'),
        SignOnErrorPage: '/html/body/div[1]/div/div/div[2]/div/div/div[2]/div[1]/div/div',
        SignOnButton: '/html/body/div/div[2]/div[1]/div[1]/div/div[1]/form/div[4]/input',
        Personal: '/html/body/div/header/div/div[2]/nav/div/ul/li[1]/a',
        PersonalPage:'/html/body/div',
        InvestingWealthMgmt: '/html/body/div/header/div/div[2]/nav/div/ul/li[2]/a',
        InvestingWealthMgmtPage: '/html/body/div[1]/main',
        StartNow: '/html/body/div/div[2]/div[1]/div[2]/div/div[2]/div/div[2]/div/div/a',
        StartNowPage:'/html/body',
        SmallBusiness:'/html/body/div/header/div/div[2]/nav/div/ul/li[3]/a',
        SmallBusinessPage:'/html/body',
        commercialBanking:'//*[@id="tabNavCommercial"]',
        commercialBankingPage:'/html/body',
        corporateInvestmentBanking: '/html/body/div/header/div/div[2]/nav/div/ul/li[5]/a',
        corporateInvestmentBankingPage: '/html/body/div[1]/div[3]',
        PrivacyCookiesSecurityLegal:'/html/body/div/footer/div/div[1]/nav/div/ul/li[1]/a',
        PrivacyCookiesSecurityLegalPage:'/html/body',
        NoticeOfDataCollection:'/html/body/div/footer/div/div[1]/nav/div/ul/li[2]/a',
        NoticeOfDataCollectionPage:'/html/body',
        GeneralTermsOfUse: '/html/body/div/footer/div/div[1]/nav/div/ul/li[3]/a',
        GeneralTermsOfUsePage:'/html/body',
        OnlineAccessAgreement:'/html/body/div/footer/div/div[1]/nav/div/ul/li[4]/a',
        OnlineAccessAgreementPage:'/html/body',
        AdChoices:'/html/body/div/footer/div/div[1]/nav/div/ul/li[5]/a',
        AdChoicesPage: '/html/body',
        ReportFraud:'/html/body/div/footer/div/div[1]/nav/div/ul/li[6]/a',
        ReportFraudPage: '/html/body',
        AboutWellsFargo:'/html/body/div/footer/div/div[1]/nav/div/ul/li[7]/a',
        AboutWellsFargoPage: '/html/body',
        Careers: '/html/body/div/footer/div/div[1]/nav/div/ul/li[8]/a',
        CareersPage: '/html/body',
        DiversityAndAccessibility:'/html/body/div/footer/div/div[1]/nav/div/ul/li[9]/a',
        DiversityAndAccessibilityPage:'/html/body',
        Sitemap:'/html/body/div/footer/div/div[1]/nav/div/ul/li[10]/a',
        SitemapPage: '/html/body',
        letsLiveHisDream:'/html/body/div/div[2]/div[5]/div/div[1]/div',
        letsLiveHisDreamPage: '/html/body',
        readyForWhatsNext:'/html/body/div/div[2]/div[5]/div/div[2]',
        readyForWhatsNextPage: '/html/body',
        questionsAboutOld401K:'/html/body/div/div[2]/div[5]/div/div[3]',
        questionsAboutOld401KPage: '/html/body'











      //  BankingAndCreditCards: '/html/body/div/nav/ul/li[1]/a',
      //  AccountsAndServicesPopup: '/html/body/div/nav/ul/li[1]/div',


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
    },

    inputUserName: async function(val) {
        // val --> johndoe
        // objectKey --> input field
        var selector = page.wellsFargo.elements['username']; // //*[@id="login-username relate-pos"]
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(val);

    },
    inputPassword: async function(val) {
        // val --> johndoe
        // objectKey --> input field
        var selector = page.wellsFargo.elements['password']; // //*[@id="login-username relate-pos"]
        await driver.sleep(2000); // in millseconds 1000ms = 1 second
        return driver.findElement(selector).sendKeys(val);

    },
};
  