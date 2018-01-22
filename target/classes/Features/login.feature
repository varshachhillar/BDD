Feature: Seller Login

#Without examples keyword
#Scenario: Seller Login Test
#
#Given User already on login page
#When title is seller
#Then enter data "himanshu.singh@industrybuying.com" and "him"
#Then Click login button
#Then user is on home page



#With examples keyword
Scenario Outline: Seller Login Test

Given User already on login page
When title is seller
Then enter data "<username>" and "<password>"
Then Click login button
Then user is on home page

Examples:
	| username | password |
	| himanshu.singh@industrybuying.com | him |
	| varsha.chhillar@industrybuying.com | test |