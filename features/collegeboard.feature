Feature:As a user I wanted to check some functionalities in the Collegeboard website.
@collegeBoard @sign
Scenario:As a user I wanted to sign up for the College board.
    Given I am on the collegeboard website
    When I click on the link "signUp"
    And I click on the link "student"
    And I enter "firstName" "Bhavani"
    And I enter "lastName" "Raj"
    And I choose the "female"
    And I give the "month" "june"
    And I give the "day" "fifteen"
    And I give the "year" "birthYear"
    And I enter "email" "testerpriya@gmail.com"
    And I enter "confirmEmail" "testerpriya@gmail.com"
    And I give the "graduatingMonth" "may"
    And I give the "graduatingYear" "gradyear"
    And I enter "zipCode" "08817"
    And I click on the link "mySchoolIsNotListed"
    And I enter "userName" "Bhavani28"
    And I enter "password" "Password@123"
    And I enter "confirmPassword" "Password@123"
    And I give the "securityQuestion" "petname"
    And I enter "answer" "Tommy"
    And I enter "addressLine1" "50 Reading Road"
    And I enter "city" "Edison"
    And I give the "state" "NJ"
    And I click on the link "click"
    And I click on the link "next"
    And I click on the link "fName"
    And I click on the link "lName"
    And I click on the link "gender"
    And I click on the link "DOB"
    #Then I should be able to sign up on clicking the "confirm"

@collegeBoard @loggingIn
Scenario:As a user I should be displayed error message when I try to login with invalid credentials 
    Given I am on the collegeboard website
    When I click on the link "signin"
    And I enter "uName" "Adhithya06"
    And I enter "PW" "Password123!"
    And I click on the link "submit"
    Then I should be able to see the "errorMessage"

@collegeBoard @forgotUserName @validCredentials 
Scenario:As a user I should receive a email to reset my username on entering valid registered email in the forgot username.
        Given I am on the collegeboard website
        When I click on the link "forgotUserName"
        And I enter "emailAddress" "kanak.raj@gmail.com"
        And I click on the link "send"
        Then I should be able to see the "successMessage"

@collegeBoard @forgotPassword @validCredentials
    Scenario:As a user I should receive a email to reset my password on entering valid registered email in the forgot password.
        Given I am on the collegeboard website
        When I click on the link "forgotPassword"
        And I enter "UserName" "Adhithya2006"
        And I enter "Email" "kanak.raj@gmail.com"
        And I click on the link "next"
        And I enter "yourAnswer" "June 2008"
        And I click on the link "Next"
        Then I should be able to see the "createANewPassword"

@collegeBoard @forgotUserName @invalidCredentials 
Scenario:As a user I should not be able to reset username by giving an unregistered emailid.
    Given I am on the collegeboard website
    When I click on the link "forgotUserName"
    And I enter "emailAddress" "testerraj@gmail.com"
    And I click on the link "send"
    Then I should be able to see the "error"

@collegeBoard @navigation
Scenario Outline:Customer clicks to multiple sections
    Given I am on the collegeboard website
    When I click on the link "<SectionName>"
    Then I should be navigating to the "<NavigatingPage>"
    Examples:
    | SectionName                     | NavigatingPage            |
    | UpcomingSATDatesAndDeadlines    | gettingScores             |
    | standOutEarnAndSave             | gettingCreditAndPlacement |
    | unlockScholarshipMatches        | welcomeBack               |