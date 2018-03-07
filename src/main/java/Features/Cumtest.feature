Feature: cumtest

#Scenario: cumtest1
#Given User on login page
#When title is seller
#Then enter data "himanshu.singh@industrybuying.com" and "him"
#Then Click login button
#Then user is on home page
#Then Close Browser


@exampletest
Scenario Outline: exampletest
Given User on login page
When title is seller
Then enter data "<username>" and "<password>"
Then Click login button
Then user is on home page
Then Close Browser

Examples:
    | username | password |
    | himanshu.singh@industrybuying.com | him |



@datalisttest
Scenario: datalisttest
Given User on login page
When title is seller
Then enter datalist username and password
| himanshu.singh@industrybuying.com | him |
Then Click login button
Then user is on home page
Then Close Browser

@datamaptest
Scenario: datamaptest
Given User on login page
When title is seller
Then enter datamap username and password
| username | password |
| himanshu.singh@industrybuying.com | him |
Then Click login button
Then user is on home page
Then Close Browser

#@second
#Scenario: cum22
#Then user is on home page
#
#@third
#Scenario: cum33
#Then user is on home page
#
#@second @third
#Scenario: cum44
#Then user is on home page
#
#@second @third
#Scenario: cum55
#Then user is on home page
