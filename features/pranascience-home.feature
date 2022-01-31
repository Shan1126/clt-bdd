Feature:As a customer I would like to test the landing page in pranaScience website

    @pranascience @login
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
      