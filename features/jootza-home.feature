Feature: As a jootza customer, I want to be able to navigate to landing poage so that I can view product information
  
  @jootza
  Scenario: Customer is displayed with jootza.com landing page
   Given I am on the Jootza portal
   When I click on "Login"
   Then I should see "LoginHeader"

  @jootza @login
  Scenario: Customer is displayed with jootza.com landing page and tries to login into the portal
   Given I am on the Jootza portal
   When I click on "Login"
   And I enter username "johndoe"
   And I enter password "password123"
   And I click on "LoginBtn"
   Then I should see "errorMessage"