Feature: Homepage 
  As a user
  I want to visit the application home
  So that I can access the various other features
  
#################################################

Scenario Outline: Home page should have navigation links
    Given I am on the homepage
    Then I should see navigation bar
    And I should see a <title> link at <count>
    Examples:
    | count |  title  | 
    |   1   |  Home  |
    |   2   |  About | 

#################################################