Feature: As a GrubHub customer, I am testing landing page of GrubHub
@grubHub @Search
Scenario: Check Search is successful 
   Given I am on the grubHub portal
   When In GHub I click on "Dismiss"
   Then In GHub I enter the "OrderFoodDelivery" "20871"
   And In GHub I click on "FindFoodBtn"
   Then In GHub I should see "Result"

@grubHub  @SignIn
Scenario Outline: As a Customers, I am testing SignIn option
Given I am on the grubHub portal
When In GHub I click on "Dismiss"
Then In GHub I click on "SignIn"
And In GHub I enter the "Email" "<emailAddress>"
And In GHub I enter the "Password" "<Password>"
And In GHub I click on "SignInBtn"
Then In GHub I should see "SignInError"
Examples:
|emailAddress             |Password    |
|JDoe@gmail.com           |123123      |
|KDoe@yahoo.com           |abc123      |
|MDoe@hotmail.com         |joedoe      | 

@grubHub  @SignUpForSpecialOffers
Scenario: As a Customers, I am testing Sign up for special offers
Given I am on the grubHub portal
When In GHub I click on "Dismiss"
Then In GHub I enter the "SignUpEmail" "KDoe@yahoo.com"
And In GHub I enter the "SignUpZcode" "20895"
And In GHub I click on "CountMeInBtn"
Then In GHub I should see "SignUpResult"

