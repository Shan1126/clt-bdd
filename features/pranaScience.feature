Feature: As a user of pranascience I want to test the function of Register

@registerPranaScience
Scenario: User is displayed with the pranaScience home page
Given I am on pranaScience portal
When I click on "signInButton"
Then I should see "signInPage"
When I click on "signUpButton"
Then I should see "signUpPage"
When I enter firstName "artrathi"
And I enter lastName "Rajaram"
And I enter countryCode "+1"
And I enter mobileNumber "1233433434"
And I enter email "abc@gmail.com"
And I enter password "abc123"
And I enter confirmPassword "abc123"
And I enter gender "female"
And I enter ageRange "35-45"
And I click on "registerButton"
Then I should see "verificationPage"

