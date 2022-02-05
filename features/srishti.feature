Feature: As a SrishtiUSA customer, I want to be able to navigate to Sign-up Page, so that I can create my account.

   @srishti @signup
   Scenario: Customer is displayed with SrishtiUSA landing page
      Given I am at srishtiusa portal
      When I click "Login"
      And I click "CreateAccount"
      Then I should get "CreateAccountPage"

    @srishti @myinfo
   Scenario: Customer tries to enter information on Signup form
      Given I am at srishtiusa portal
      When I click "Login"
      And I click "CreateAccount"
      And I enter "Email" "rajiguna@abc.com"
      And I enter "Password" "password123"
      And I enter "Firstname" "Raji"
      And I enter "Lastname" "Guna"
      And I enter "Company" "Rajimart"
      And I enter "Address" "234 Frisco Street"
      And I enter "AptNo" "890"
      And I enter "City" "Frisco"
      And I select the "Country" "United States"
      And I select the "State" "Texas"
      And I enter "Zip" "75035"
      And I enter "Phone" "1234567890"
      And I enter "TaxID" "TID123"
      And I enter "Comments" "Create-Account"
      And I scroll to the bottom of the screen
      And I click "REGISTER"
      Then I should get "LoginError"
