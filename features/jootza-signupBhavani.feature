Feature: As a customer I want to verify the login.
@Jootza @Login
Scenario: As a customer I should not be able to login with invalid credentials
Given I am on jootza website
When I clicked on the link "login"
And I enter userName "Bhavani"
And I enter passWord "Priya"
And I click on the button "loginbtn"
Then I should be displayed the "errorMessage"