Feature: As a jootza customer, I want to be able to navigate to landing poage so that I can view product information

  @jootza
  Scenario: Customer is displayed with jootza.com landing page
    Given I am on the Jootza portal
    When I click on "Login"
    Then I should see "LoginHeader"

  @jootza @login
  Scenario: Customer is displayed with jootza.com landing page and tries to login into the portal
    Given I am on the Jootza portal
    When I click on "Login"
    And I enter username "johndoe"
    And I enter password "password123"
    And I click on "LoginBtn"
    Then I should see "errorMessage"

  @jootza @checkApprover
  Scenario Outline: Customer is logging into the jootza website to verify the approver name
    Given I am logged on to the Jootza portal as "<Jootza Customer>"
    Then I should see the approver name as "<approverName>"
    Examples:
      | Jootza Customer | approverName |
      | kavithas        | ADMIN, CLT   |
      | Shanuser12      | Adams, Jimmy |

  @jootza @recordTime
  Scenario Outline: Customer is logging into the jootza website to record time
    Given I am on logged on to the Jootza portal as "Jootza Customer>
    # When I enter timesheet for the day '<Day>' for the '<Category>' with '<Notes>' for '<Hrs>'
    # And I click on  "Submit"
    # Then I should see "Timesheet Created"  Message
    Examples:
      | Jootza Customer |
      | Shanuser12      |
# | testuserAP      |
# | Shanuser12      | Tuesday   | Development  | 8   | Worked on User story CLT-B3-009
# | Shanuser12      | Wednesday | Development  | 8   | Worked on User story CLT-B3-009
# | Shanuser12      | Thursday  | Development  | 8   | Worked on User story CLT-B3-009
# | Shanuser12      | Friday    | Development  | 8   | Worked on User story CLT-B3-009