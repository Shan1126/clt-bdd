Feature: As a student, I want to check the college list in my state 

     @bigfuture
    Scenario: Student tries to navigate to Bug future option to search for college list
        Given Student is at college board portal
        When Clicks "accuplacerLink"
        And Scrolldown to bottom of page
        And Select option "helpfulBtn"
        And Enter "improveTxt" "Very informative"
        And Clicks "submitBtn"
        Then Verify "thankyouResponse"