Feature: As a jootza customer, I want to be able to navigate to Sign-up Page, so that I can Register my account.

 @jootzaraji @login
  Scenario: Customer is displayed with jootza.com landing page
   Given I am at Jootza portal
   When I click "Login"
   Then I should be able to see "LoginHeader"
 
 @jootzaraji @logininfo
  Scenario: Customer is displayed with jootza.com landing page and tries to login into the portal
   Given I am at Jootza portal
   When I click "Login"
   And I enter the UN "rajiguna"
   And I enter the PW "password123"
   And I click "LoginBtn"
   Then I should be able to see "ErrorMsg"

 @jootzaraji @register
  Scenario: Customer is displayed with jootza.com landing page and tries to Sign-up an account.
   Given I am at Jootza portal
   When I click "REGISTER NOW"
   Then I should be able to see "REGISTER"

 @jootzaraji @reginfo
  Scenario: Customer is displayed with jootza.com Register page and tries to enter sign-up information
   Given I am at Jootza portal
   When I click "REGISTER NOW"
   And I enter the AccessCode "123456"
   And I enter the FirstName "Raji"
   And I enter the LastName "Guna"
   And I enter the Email "rajiguna@abc.com"
   And I enter the UserName "rajiguna"
   And I enter the Password "password123"
   And I click "SignupBtn"
   Then I should be able to see "ErrorMessage"

@jootzaraji @scroll
  Scenario: Customer is displayed with jootza.com landing page and tries to scroll to the bottom
   Given I am at Jootza portal
   When I scroll to the bottom of the screen
   Then I should be able to see "SubscribeOurNewsLetter"

@jootzaraji @subscribe
  Scenario: Customer is displayed with jootza.com landing page and scroll to the bottom and Subscribe
   Given I am at Jootza portal
   When I scroll to the bottom of the screen
   And I enter the EmailAddress "rajiguna@abc.com"
   And I click "SubscribeBtn"
  Then I should be able to see "ThankYouMessage"
