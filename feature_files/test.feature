Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  In order to run my E2E tests

  Scenario: provide details about old bank
    Given I go to 'start' page
    When I provide name of my old bank as "Deutsche Skatbank"
    And I provide "Alias/VR-NetKey" as "demo"
    And I provide "PIN" as "demo"
    And I agree to FinReach GmbH terms and conditions
    And click 'Start Bank Account Switch' button
    Then  I am on "accounts/edit" page

  Scenario: submit contact details
    Given I am on 'accounts/edit' page
    When I fill out details form by adding query params to url
    Then I am on 'account_import' page

  Scenario: navigate from account_import page to Overview page
    Given I am on 'account_import' page
    And progress bar is gone
    When  click 'Next' link-button
    Then I am on 'overview' page

  Scenario: Direct Debits: notify all identified creditors
    Given I am on 'overview' page
    When I click 'Direct Debits' link-button
    Then I am on 'directdebits' page
    When I click 'Notify All' link-button
    Then I am on 'transfer_mandates?debit=true' page

  Scenario: I sign with mouse the switch of all my direct debit mandates
    Given I am on 'transfer_mandates?debit=true' page
    When I sign with mouse
    Then I verify that there are no identified creditors in my Direct Debits list
    And I am on 'directdebits' page
    And I wait

  Scenario: I deactivate a standing order
    Given I go to 'standingorders' page