Feature: Login Functionality

Scenario: Successful Login
Given user is on saas login page
When user enters username
And user enters password
And user clicks login button
Then user should see homepage

Scenario: Login without username
Given user is on saas login page
When user enters password
And user clicks login button
Then user should see username required error

Scenario: Login without password
Given user is on saas login page
When user enters username
And user clicks login button
Then user should see password required error

Scenario: Login without username and password
Given user is on saas login page
When user clicks login button
Then user should see username required error