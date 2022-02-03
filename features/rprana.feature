Feature: As a PranaScience customer, I want to be able to navigate to Sign-up Page, so that I can Register my account.

   @rprana @sign
   Scenario: Customer is displayed with pranascience landing page
      Given I am at pranascience portal
      When I click upon "Signin"
      And I click upon "Signup"
      Then I want to see "SignupPage"

   @rprana @enterinfo
   Scenario: Customer tries to enter Signup information
      Given I am at pranascience portal
      When I click upon "Signin"
      And I click upon "Signup"
      And I give "FName" "Raji"
      And I give "LName" "Guna"
      And I select "CountryCode" "+1"
      And I give "MobileNumber" "1234567890"
      And I give "Email" "rajiguna@abc.com"
      And I give "PWord" "password123"
      And I give "ConfirmPW" "password123"
      And I choose gender "Female"
      And I select "AgeRange" "25-35"
      And I click upon "Register"
      Then I want to see "EmailExists"

