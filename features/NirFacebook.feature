Feature: As a Facebook user, I want to be able to navigate to landing poage so that I can Login

  @facebook @login
  Scenario: as a user I want to be displayed with facebook.com landing page
    Given I am on the Facebook portal
    When I a enter username "jjjjohndoeeee"
    And I a enter password "password123"
    And I a click on "LoginBtn"
    Then I should see  a "errorMessage"

  @facebook @wrongpassword
  Scenario:  I want to be displayed with wrong password landing page
    Given I am on the Facebook portal
    When I a enter username "Auto4Testing"
    And I a enter password "password123"
    And I a click on "LoginBtn"
    Then I should see  a "errorMessage2"

    @facebook @forgotpassword
  Scenario:  I want to be displayed with forgot password landing page
    Given I am on the Facebook portal
    When I a enter username "Auto4Testing"
    And I a enter password "password123"
    And I a click on "LoginBtn"
    Then I should see  a "errorMessage2"
