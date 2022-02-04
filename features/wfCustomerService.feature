Feature: As a wells fargo customer, I want to check the functions of customer serice link from the home page.

@customerService
Scenario: Customer is displayed with wellsfargo website and wants to navigate to the customer service page
Given I am on wfCustomerService portal
When I click on "customerService"
Then I should see "customerServicePage"

@alertLearnMore
Scenario: Customer wants to navigate to the Alert Learn More page from the Customer Service using Learn More link.
Given I am on wfCustomerService portal
When I click on "customerService"
Then I should see "customerServicePage"
When I click on "learnMore" 
Then I should see "COVID19ResourcesSupport"

@topQuestions
Scenario Outline: Customer is displayed with wellsfargo website and wants to navigate to the customer service page
Given I am on wfCustomerService portal
When I click on "customerService"
Then I should see "customerServicePage"
When I click on "<TopQuestions>"
Then I should see "<TopQuestionsPage>"

Examples:
|TopQuestions                       |TopQuestionsPage                       |
|createPasswordOrFindUsername       |createPasswordOrFindUsernamePage       |
#|requestStopPaymentCheck            |requestStopPaymentCheckPage            |
#|isFeeForZelle                      |isFeeForZellePage                      |
#|findRoutingAndAccountNumber        |findRoutingAndAccountNumberPage        |
#|reportSuspectedFraud               |reportSuspectedFraudPage               |
