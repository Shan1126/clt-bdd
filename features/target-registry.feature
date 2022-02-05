Feature: As a Target customer, I want to be able to navigate to landing page so that I can view product information
  
  @target
  Scenario: Customer is displayed with target.com Registry page
   Given I am on the target website
   When I click on "Registry" link
   Then I should see "RegistryHeader" page