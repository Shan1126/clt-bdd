Feature: As a Facebook user, I want to be able to navigate to landing poage so that I can Login

  @facebook @facelogin
  Scenario: as a user I want to be displayed with facebook.com landing page
    Given I am on the Facebook portal
    When I a enter username "jjjjohndoeeee"
    And I a enter password "password123"
    And I a click on "LoginBtn"
    Then I should see a "errorMessage"

  @facebook @wrongpassword
  Scenario:  I want to be displayed with wrong password landing page
    Given I am on the Facebook portal
    When I a enter username "Auto4Testing"
    And I a enter password "password123"
    And I a click on "LoginBtn"
    Then wrong password page should load
  @ScenarioOutline
  Scenario Outline: Create list for footer page
    Given I am on the Facebook portal
    When I a click on "<FooterElement>"
    Then corresponing page should be loaded "<Page>"
    Examples:
      | FooterElement | Page |
      | SignUp        | xyz1 |
      | Messenger     | xyz2 |
      | Watch         | xyz3 |