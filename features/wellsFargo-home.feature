Feature: As a customer of wells fargo, I want to test the Home page

@homeHeader 
Scenario Outline: Customer is displayed with wellsFargo website and wants to check the header options
Given I am on wellsFargo portal
When I click on "<optionName>"
Then I should see "<optionPage>"

Examples:
|optionName       | optionPage          |
|Enroll           | EnrollPage          |
|CustomerService  | CustomerServicePage |
|ATMsLocations    | ATMsLocationsPage   |

@personalSignOn
Scenario: Customer is displayed with wellsFargo website and wants to login personaly for invalid credentials
Given I am on wellsFargo portal
When I enter username "artrathi"
And I enter password "asd3343"
And I click on "SignOnButton"
Then I should see "SignOnErrorPage"

@personal
Scenario: Customer is displayed with wellsFargo website and wants to check personal tab
Given I am on wellsFargo portal
When I click on "Personal"
Then I should see "PersonalPage"

@investingWealthManagement
Scenario: Customer is displayed with wellsFargo website and wants to navigate to the Investing & Wealth Management page
Given I am on wellsFargo portal
When I click on "InvestingWealthMgmt"
Then I should see "InvestingWealthMgmtPage"

@smallBusiness
Scenario: Customer is displayed with wellsFargo website and wants to navigate to the small business page
Given I am on wellsFargo portal
When I click on "SmallBusiness"
Then I should see "SmallBusinessPage"


@commercialBanking
Scenario: Customer is displayed with wellsFargo website and wants to navigate to commercial banking page
Given I am on wellsFargo portal
When I click on "commercialBanking"
Then I should see "commercialBankingPage"

@corporateInvestmentBanking
Scenario: Customer is displayed with wellsFargo website and wants to navigate to  corporate and Investment banking page
Given I am on wellsFargo portal
When I click on "corporateInvestmentBanking"
Then I should see "corporateInvestmentBankingPage"

@startNow
Scenario: Customer is displayed with wellsFargo website and wants to navigate to Everyday checking by clicking StartNow
Given I am on wellsFargo portal
When I click on "StartNow"
Then I should see "StartNowPage"

@homeFooter
Scenario Outline: Customer is displayed with wellsFargo website and wants to check the footer links
Given I am on wellsFargo portal
When I click on "<footerLink>"
Then I should see "<footerLinkPage>"

Examples:
|footerLink                     |footerLinkPage                         |
|PrivacyCookiesSecurityLegal    |PrivacyCookiesSecurityLegalPage        |
|NoticeOfDataCollection         |NoticeOfDataCollectionPage             |
|GeneralTermsOfUse              |GeneralTermsOfUsePage                  |
|OnlineAccessAgreement          |OnlineAccessAgreementPage              |
|AdChoices                      |AdChoicesPage                          |
|ReportFraud                    |ReportFraudPage                        |
|AboutWellsFargo                |AboutWellsFargoPage                    |
|Careers                        |CareersPage                            |
|DiversityAndAccessibility      |DiversityAndAccessibilityPage          |
|Sitemap                        |SitemapPage                            |


@suggestedForYou
Scenario Outline: Customer is displayed with wellsFargo website and wants to check the Suggested for you section
Given I am on wellsFargo portal
When I click on "<suggesName>"
Then I should see "<suggesLink>"

Examples:
    |suggesName                 |suggesLink                     | 
    |letsLiveHisDream           |letsLiveHisDreamPage           | 
    |readyForWhatsNext          |readyForWhatsNextPage          |
    |questionsAboutOld401K      |questionsAboutOld401KPage      |
