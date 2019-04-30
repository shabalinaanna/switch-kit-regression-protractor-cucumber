Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  In order to run my E2E tests

#  Scenario: Navigate to Switch kit start page
#    Given I go to start page
#    Then I am on "Welcome to your bank account switch!" page

  Scenario: provide details about old bank
    Given I go to start page
    When I provide name of my old bank as "Deutsche Skatbank"
    And I provide "Alias/VR-NetKey" as "demo"
    And I provide "PIN" as "demo"
    And I agree to FinReach GmbH terms and conditions
    And click 'Start Bank Account Switch' button
    Then  I am on "accounts/edit" page

