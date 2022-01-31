Feature:As a customer I would like to test the landing page in pranaScience website

    @pranascience @createAccount
    Scenario:As a customer I should be able to Signup by entering valid data in all the fields
        Given I am on the pranaScience website
        When I enter the firstName "Bhavani"
        And I enter the lastName "Raj"
        And enter the email "test@gmail.com"
        And I select countryCode "value"
        And I enter the mobileNumber "765654897"
        And I select the gender "female"
        And I enter the passWord "Password@123"
        And I enter confirmPassWord "Password@123"
        And I select age "agerange"
        And click on the button "Register"
        Then I should be in the "verification"

    @pranascience @signup @invaliddata
    Scenario Outline:As a customer when I enter invalid data I should be shown an error message.
        Given I am on the pranaScience website
        When I click the button "login"
        And I enter userName "<email>"
        And I enter PW "<password>"
        And hit "signin"
        Then I see "errorMessage"
        Examples:
        |email                   | password    |
        |test@gmail.com          | password123 |
        |hello12@yahoo.com       | priya21345  |
        |testing345@gmail.com    | Password    |

    @pranascience @signup @validdata
    Scenario:As a customer I should be able to login
        Given I am on the pranaScience website
        When I click the button "login"
        And I enter userName "kanak.priya28@gmail.com"
        And I enter PW "Adhithya15"
        Then I should be logged in on hitting the "signin"

    @pranascience @sectionsNavigate
    Scenario Outline:As a customer I should be navigated to the page on clicking the link tab in the header
        Given I am on the pranaScience website
        When I click the link "<sectionName>"
        Then I should land on the "<navigatingPage>"
        Examples:
        |sectionName            | navigatingPage|
        |home                   | breatheWell   |
        |aboutUs                | introduction  |
        |howItWorks             | howDoesItWork |
        |books                  | book          |
        |login                  | loginBtn      |  

    @pranascience @forgotPasswordLink
    Scenario:As a customer when I click on the forgot password link I should be directed to the reset passsword page
        Given I am on the pranaScience website
        When I click the button "login"
        And I click on the link in the bottom "forgotPassword"
        Then I should be directed to the "resetPassword"
    
    @pranascience @resetPassword
    Scenario:As a customer when I click the forgot password? link I should be directed to the Reset password where on entering the country code and mobile number I should receive a code which helps me to reset password.
        Given I am on the pranaScience website
        When I click the button "login"
        And I click on the link in the bottom "forgotPassword"
        And I should be directed to the "resetPassword"
        And I select countryCode from the dropdown "list"
        And I enter the mobileNumber "765654897"
        Then I should receive a code on clicking the "sendCode"




    
    
        
        

      