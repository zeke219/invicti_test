Feature: A user login

  Scenario: A user successfully login and logout
    Given I get into homepage
    When I click on Login
    And I enter correct username
    And I enter correct password
    And I submit the form
    Then I should successfully login as admin
    And There should be two accounts in the list
    And I am able to logout