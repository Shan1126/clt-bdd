Feature: As a customer of Srishtiusa i wanted to register
    @nirSrishti
    Scenario: As coustomer wants to be in landing page of srishtiusa.com website
    Given I wanted to be in shrishtiusa.com webpage
    When I click up on "MyAccount"
    And Corresponding My Account page should be opened
    And I click on to "CreateAccount"
    And Create Account page should open 
    And I Enter the Email "Naomi.Smith@gmail.com"
    And I Enter Password as "naomipassword"
    And I Enter First Name as "Naomi"
    And I Enter Last Name as "Smith"
    And I Enter Company as "ABCDEFGH"
    And I Enter Address as "8000 Floyd Curl"
    And I Enter Suite as "1025"
    And I Enter City as "Austin"
    And I Select "State" "Texas"
    And I Enter Zip as "78712"
    And I Enter Phone as "1234567891"
    And I Enter Tax ID as "ABCD123"
    And I Enter Comment as "Great to join"
    And I Click on "Register"
    Then I will see "LoginError"
    

