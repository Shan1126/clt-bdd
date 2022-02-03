Feature:As a jcpenny customer I wanted to verify the home screen
    @jcpenny @signinlanding
    Scenario:As a customer I should be navigated to the signin page on clicking the signin
        Given I am on the jcpenny website
        When I click on the "signin"
        Then I should be navigated to the "signinPage"

    @jcpenny @signin 
    Scenario:As a customer when I enter valid credentials I should be displayed an error message
        Given I am on the jcpenny website
        When I click on the "signin"
        When I enter the "email"
        And I enter my "passWord"    
        Then I should be able to signin on clicking the button "signinBtn"    
       

    @jcpenny @search
    Scenario:As a customer I should be able to search
        Given I am on the jcpenny website
        When I enter text in "searchBox"
        And click "searchIcon"
        Then I should be shown the "searchResult"

    @jcpenny @storelocator
    Scenario:As a customer I should be able to search for stores near me in the store locator.
        Given I am on the jcpenny website
        When I click the icon "storeLocator"
        And enter my zipcode in the "searchTextBox"
        And click on the "search"
        Then I should see "storesNearMe"
        
    @jcpenny @createAnAccount
    Scenario:As a customer I should be able to create an account.
        Given I am on the jcpenny website
        When I click on the "signin"
        And I should be navigated to the "signinPage"
        And on clicking the "createAccount"
        And enter in the firstName "Bhavani"
        And enter in the lastName "Raj"
        And enter in the phoneNumber "7327730675"
        And enter in the emailId "priya21345@gmail.com"
        And enter in the password "Password@1234"
        And on clicking the text "createButton"
        Then I should be a "registeredMember" 

    @jcpenny @forgotPassword
    Scenario:As a customer when I click the forgot password? link and enter my email in the email field a success message should be displayed
        Given I am on the jcpenny website
        When I click on the "signin"
        And I should be navigated to the "signinPage"
        And click the button "forgotPassword"
        And enter in the emailaddress "priya21345@gmail.com"
        Then a success message will be displayed on clicking "send"

    @jcpenny @sections
    Scenario Outline:Customer scrolls down to multiple sections
        Given I am on the jcpenny website
        When I click on "<sectionName>"
        Then I should be navigated to "<navigatingPage>"
        Examples:
        |sectionName            | navigatingPage |
        |men                    | mensClothing   | 
        |girls                  | babyKidsGirls  |
        |boys                   | babyKidsBoy    |
        |women                  | womenShoes     |

    @jcpenny @signin @invalidcredentials
    Scenario Outline:Customers should not be able to sigin with invalid credentials
        Given I am on the jcpenny website
        When I click on the "signin"
        And enter in the email field "<email>"
        And enter in the password field my "<passWord>"  
        And click the red button "signinBtn"
        Then I should be displayed an "errorMessage"
        Examples:
        |email                        | password   |
        |hello@yahoo.com              | Password12 |
        |tester123@yahoo.com          | Adhithya15 |
        |test123@gmail.com            | Janani09   |
        |testing@outlook.com          | Password   | 

       

