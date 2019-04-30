Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  In order to run my E2E tests

  Scenario: provide details about old bank
    Given I go to start page
    When I provide name of my old bank as "Deutsche Skatbank"
    And I provide "Alias/VR-NetKey" as "demo"
    And I provide "PIN" as "demo"
    And I agree to FinReach GmbH terms and conditions
    And click 'Start Bank Account Switch' button
    Then  I am on "accounts/edit" page

  Scenario: submit contact details
#    Given I am on 'accounts/edit' page
    When I fill out details form by adding query params to url
#    And submit the form
    Then I am on 'account_import' page

  Scenario:
#      Given I am on 'account_import' page
    And progress bar is gone
    When  click 'Next' link-button
    Then I am on 'overview' page
