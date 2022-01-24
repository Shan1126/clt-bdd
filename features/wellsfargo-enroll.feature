Feature: As a Wellsfargo customer I want to test the landing page.

@landing page @Enroll
Scenario: Customer is displayed with Enroll page
Given I am on wellsfargo.com website
When I click on Enroll link in the header
Then I should see the Enroll screen