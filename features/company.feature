Feature: Example feature
  As a company manager
  I want to open a new company
  So that I use the accounting system

  Scenario: Visiting create new company page
    Given I am on the homepage
    When I click on "Add new company"
    Then I should see "Create new company"

  Scenario: Creating a new company
    Given I am on the "companies" page
    And I am not logged in
    When I enter the "name" "Joe's place"
    And I enter the "email" "jeff@joe.com"
    And I enter the "address" "University of Iowa"
    And I enter the "phone_number" "001 234 567 8999"
    And I enter the "start_date" "1/1/2017"
    And I enter the "default_currency" "USD"
    And I submit the information
    Then The "users" page should be displayed
    And I should see "Joe's place Users"