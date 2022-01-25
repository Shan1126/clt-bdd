@target
Feature: As a target customer, I want to test the landing page

  @target
  Scenario: Customer is displayed with target.com landing page
   Given I am on the Target portal
   When I click on target "Registry"
   Then I should see target "RegistryEntry"


