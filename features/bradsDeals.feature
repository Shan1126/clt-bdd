Feature: Test  udemyHomePage Functionality
    @category
    Scenario: Test Top categories Functionality
        Given I am in BradsDeals HomePage
        When I scroll down to "myDeals"
        Then I should see header "exclusiveDeals"
