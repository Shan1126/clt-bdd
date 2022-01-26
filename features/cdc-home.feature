@cdc
Feature: As a cdc user, I want to test the landing page

  @cdc
  Scenario: User is displayed with cdc.gov landing page
   Given I am on the cdc portal
   When I click on cdc "TravelGuidance"
   Then I should see cdc "TravelGuidanceEntry"


