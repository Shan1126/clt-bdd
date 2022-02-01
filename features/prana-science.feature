Feature: As a prana science customer, I want to be able to navigate to landing poage so that I can view 
product information
  
  @prana
  Scenario: Customer is displayed with pranascience.org/login landing page
   Given I am on the Pranascience portal
   When I click on "signin" link
   Then I should see "LoginHeader1" screen
   When I click on "signup" link
   Then I should see "signupDetails" screen
   Then I enter firstname "raj" 
   Then I enter lastname "Sankaran" 
   Then I select countrycode "+91" 
   Then I enter emailaddress "kula_100in@rediffmail.com" 
   Then I enter mobilenumber "(988) 446-1839" 
   Then I enter newpassword "aaaaaaa" 
   Then I enter secondnewpassword "aaaaaaa" 
   Then I select on Gender "male" 
   Then I select ageRange "18-25" 
   Then I click on Reg "Registration" 
   Then I should see "verification" screen
   


 

