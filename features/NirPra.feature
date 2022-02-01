Feature: As a pranascience customer, I want to be able to navigate to landing page so that I can signup

    @NirPra @Headder
    Scenario Outline: Customer is displayed with pranascience landing page
        Given I am on the pranascience portal
        When I Click on "<headder>"
        Then corresponing page should be opened "<page>"

        Examples:
            | headder   | page |
            | AboutUs   | abc1 |
            | HowItWork | abc2 |
            | Books     | abc3 |
            | Login     | abc4 |
            | Home      | abc5 |


    @NirPra @enterinfo
    Scenario: Customer tries to enter Signup information
        Given I am at pranascience portal
        When I click upon "Signin"
        And I click upon "Signup"
        And I give "FName" "Nimy"
        And I give "LName" "Kumar"
        And I select the countryCode "+1"
        And I give "MobileNumber" "1234567890"
        And I give "Email" "nimyKumar@gmail.com"
        And I give "PWord" "password123"
        And I give "ConfirmPW" "password123"
        And I select the gender "female"
        And I select the ageRange "25-35"
        And I click upon "Register"
        Then I want to see "Sendverification"