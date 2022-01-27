Feature: As a Wellsfargo customer I want to test the landing page.

@Wellsfargo
Scenario: Customer is displayed with Enroll page
 Given I enter wellsfargo website
 When I click on the link "Enroll"
 # and click
 Then I should see the "Enrollscreen"