Feature: As a customer of wells fargo, I want to test the Home page

@customerService
Scenario: Customer is displayed with wellsfargo website and wants to navigate to Customer Service
Given I am on wellsFargo portal
When I click on "CustomerService"
Then I should see "CustomerServicePage"
