Feature: As a doordash user, I want to test user signup page
@doorDash @SignIn
Scenario: Check SignUp is successful 
   Given I am on the doordash portal
   When In DoorD I click on "SignIn"
   Then In DoorD I should see "SignUpPage"
   When In DoorD I enter the "SEmail" "JDoe@gmail.com"
   And In DoorD I enter the "SPassword" "Doe"
   And In DoorD I click on "SignInBtn"
   Then In DoorD I should see "ErrMessage"


@doorDash @signUP
  Scenario: Check SignUp is successful 
   Given I am on the doordash portal
   When In DoorD I click on "SignUp"
   Then In DoorD I should see "SignUpPage"
   When In DoorD I enter the "FirstName" "John"
   And In DoorD I enter the "LastName" "Doe"
   And In DoorD I enter the "Email" "JDoe@gmail.com"
   And In DoorD I enter the "MobileNumber" "123 456 1281"
   And In DoorD I enter the "Password" "MyEasyPassword"
   And In DoorD I click on "SignUpBtn"
   Then In DoorD I should see "errorMessage"  

# @doorDash @search
# Scenario: Check SignUp is successful 
#    Given I am on the doordash portal
#    When In DoorD I enter the "EnterDeliveryA" "Newcut Road, Germantown, MD, USA"
#    And  In DoorD I click on "ArrowIcon"
#    Then In DoorD I should see "Result"
