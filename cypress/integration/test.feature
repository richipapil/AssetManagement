Feature: Testing Asset Managment system

#Background: Testing with unique name

Scenario: Adding an Asset
    Given I navigate to the website
    When I click on the Add Asset tab
    And I give type in a uniqiue combination name of 4 uppercase letters and 10 digits and click submit button
    Then I receive a message as Correct Format in the Color Green  


