Feature: As a science.org customer, I want to navigate to landing page 
@science
     Scenario: coustomer wants to read the science.org website
     Given want to visit science.org
     When I click on "news"
     Then news page should be opened