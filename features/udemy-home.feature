Feature: Test  Shopping Cart on Udemy website.

@shoppingCart
Scenario: Test shopping cart Functionality
 Given I am in Udemy Home Page
 When I click in "shoppingCart" 
 Then I should see the "keepShopping" 
 #Then enter username as "username"
