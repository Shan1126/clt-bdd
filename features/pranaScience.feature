Feature: As a PranaScience customer, I want to be able to navigate to Sign-up Page, so that I can Register my account.

    @prana @signup
    Scenario: Customer is displayed with pranascience landing page
        Given I am at pranascience portal
        When I click "signinBtn"
        And I click "signupBtn"
        Then I want to see "signupPage"

    @prana @info
    Scenario: Customer tries to enter Signup information
        Given I am at pranascience portal
        When I click "signinBtn"
        And I click  "signupBtn"
        And I enter "fName" "Ani"
        And I enter "lName" "kat"
        And I select "countryCode" "+1"
        And I enter "mobileNumber" "1234567890"
        And I enter "emailId" "ani@abc.com"
        And I enter "passWord" "password123"
        And I enter "confirmPassword" "password123"
        And I click "optionFemale"
        And I select "ageRange" "25-35"
        And I click "registerBtn"
        Then I want to see "emailExists"