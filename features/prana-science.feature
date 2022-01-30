Feature: As a prana science customer, I want to be able to navigate to landing poage so that I can view 
product information
  
  @prana
  Scenario: Customer is displayed with pranascience.org/login landing page
   Given I am on the Pranascience portal
   When I click on "signup" link
   Then I should see "LoginHeader1" screen