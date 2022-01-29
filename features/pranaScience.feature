Feature: Test  Pranascience signup

    @pranaSignup
    Scenario: Customer is displayed with pranascience.com landing page and tries to signup to the portal
        Given I navigate to pranascience website
        When I click pranaRegister "register"
        And Enter  pranaUsername "health"
        And Enter  pranaEmail "health@gmail.com"
        And Enter  pranaPassword "health@22"
        And Confirm repranaPassword "health@22"
        Then Click the register  "confirmRegister"