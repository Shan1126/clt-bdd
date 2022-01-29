Feature: Test  Shopping Cart on Udemy website.

 @loginmail
  Scenario: Customer is displayed with yahoo.com landing page and tries to login into the portal
   Given I am on the Yahoo portal
   When I click in "Login"
   And Give username "abc"
   And I click  "nextbtn" 
   Then Screen should display "errorMessage"