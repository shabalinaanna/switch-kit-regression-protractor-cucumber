Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  In order to run my E2E tests

  Scenario: Navigate to Switch kit start page
    Given I go to "https://dkb:gNT2MAfd@dkb-dev.finreach.com/"
    Then I reach Welcome to you bank account switch page

