Feature: A user get into homepage

  @Sanity
  Scenario: A user get into homepage
    When I get into homepage
    Then I should see the logo
    And I should see login button
    And I should see navigation headers