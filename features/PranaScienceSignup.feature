Feature: As a pranascience user, I want to test user registration function
  
@pranaScience 
  Scenario: Check SignUp is successful 
   Given I am on the pranascience portal
   When In Prana I click on "SignIn"
   And In Prana I click on "SignUp"
   Then In Prana I should see "SignUpPage"
   When I enter the firstName in Prana "John"
   And I enter the lastName "Doe"
   And I select the countryCode "+1"
   And I enter the mobileNumber "123 456 1281"
   And I enter the email "JDoe@gmail.com"
   And I enter the password "MyEasyPassword"
   And I enter the confirmPassword "MyEasyPassword"
   And I select the gender "female"
   And I select the ageRange "25-35"
   And In Prana I click on "register"
   Then In Prana I should see "registerationResult" 