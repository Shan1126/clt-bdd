
Feature: As a PranaScience customer, I want to be able to navigate to Sign-up Page, so that I can Register my account.

     @signup
    Scenario: Customer is displayed with pranascience landing page
        Given I navigate Pranascience portal
        When I press "signinBtn"
        And I press "signupBtn"
        Then I want to see "signupPage"
     @info
    Scenario: Customer tries to enter Signup information
        Given I am at pranascience portal
        When I press "signinBtn"
        And I press "signupBtn"
        And I enter "fName" "Ani"
        And I enter "lName" "kat"
        And Select option "countryCode" "+91"
        And I enter "mobileNumber" "1234567890"
        And I enter "emailId" "ani@abc.com"
        And I enter "passWord" "password123"
        And I enter "confirmPassword" "password123"
        And I press "optionFemale"
        And Select option "ageRange" "25-35"
        And I press "registerBtn"
        Then The page displays "emailExists"
