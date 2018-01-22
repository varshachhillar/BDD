Feature: Seller PO

#With examples keyword
#Scenario Outline: Create Seller PO
#
#Given User already on login page
#When title is seller
#Then enter data "<username>" and "<password>"
#Then Click login button
#Then Click on PO List
#Then Click on new PO
#Then Enter "<poname>" and "<client>"
#Then close browser
#
#Examples:
#	| username | password | poname | client|
#	| himanshu.singh@industrybuying.com | him | BDDAuto | Bluemoon |
#	
	
#Using table
Scenario: Create Seller PO

Given User already on login page
When title is seller
Then enter data username and password
| himanshu.singh@industrybuying.com | him |
Then Click login button
Then Click on PO List
Then Click on new PO
Then Enter poname and client
| BDDAuto | Bluemoon |
Then close browser

	