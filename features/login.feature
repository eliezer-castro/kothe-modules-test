Feature: Login
  As a user
  In order to use the application
  I want to login with email and password

  Scenario: Login with sucess
    Given I fill username
    And I fill password
    When I click Entrar
    Then I should see the home page
