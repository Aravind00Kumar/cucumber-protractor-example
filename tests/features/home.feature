Feature: Homepage 
  As a user
  I want to visit the application home
  So that I can access the various other features
  
#################################################

Scenario: Home page should have navigation links
    Given I am on the homepage
    Then I should see navigation bar
    And I should see a "home" link
    And I should see a "about" link

#################################################

Scenario: Home page should have title
    Given I am on the homepage
    Then I should see a title on it
    
#################################################