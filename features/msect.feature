Feature: Testing the landing page with multiple sections
@msect
Scenario Outline: Customer wants to see multiple sections

Given I am on Amazon website
When I click section "<Section Name>"
Then I should see product "<Section product>"
Examples:
|Section Name    |Section product      |
|BestSellers     |AmazonBestSellers    |
|AmazonBasics    |abasics              |
|NewReleases     |AmazonNewReleases    |
|CustomerService |CustomerServicePage  |
|TodaysDeals     |AmazonTodaysDeals    |

