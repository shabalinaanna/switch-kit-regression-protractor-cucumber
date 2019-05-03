Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  In order to run my E2E tests

  Scenario: provide details about old bank
    Given I go to 'home' page
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

#  Scenario: Direct Debits: notify all identified creditors
#    Given I am on 'overview' page
#    When I click 'Direct Debits' link-button
#    Then I am on 'directdebits' page
#    When I click 'Notify All' link-button
#    Then I am on 'transfer_mandates?debit=true' page

#  Scenario: I sign with mouse the switch of all my direct debit mandates
#    Given I am on 'transfer_mandates?debit=true' page
#    When I sign with mouse
#    Then I verify that there are no identified creditors in my Direct Debits list
#    And I am on 'directdebits' page
#    And I wait

#  Scenario: I notify unknown creditor
#    Given I go to 'directdebits' page
#    And I wait
#    When I click Notify for the 1st company in Unknown Creditors section
#    Then I am on 'creditor_identification' page
#
#  Scenario: I select Other creditor and sign
#    Given I am on 'creditor_identification' page
#    When I click 'Other creditor' radio button
#    Given I fill out creditor info as 'TestCompany' 12345 'Berlin'
#    And I sign with mouse
#    Then I wait

  Scenario: I deactivate a standing order
    Given I go to 'standingorders' page
    When I click Deactivate for standing order
    Then I am on 'perform_standing_order_transfer' page
    And I have 2 steps there to complete the transfer

  Scenario: I verify details of standing order in Step 1 and click Next
    Given I am on 'perform_standing_order_transfer' page
    Then I can see details of standing order
