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

        @NirPra @Register
        Scenario Outline : Customer is displayed with pranascience landing page
        Given I am on the pranascience portal
        When I Click on "<PagEle>"
        Then the corresponding "<value>" are entered
        Examples:
        
            | PagEle    | value  |
            | FirstName | Value1 |



