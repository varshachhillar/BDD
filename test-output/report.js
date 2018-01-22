$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/User1/eclipse-workspace/javaenv/CucumberBDD/src/main/java/Features/createPO.feature");
formatter.feature({
  "line": 1,
  "name": "Seller PO",
  "description": "",
  "id": "seller-po",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#With examples keyword"
    },
    {
      "line": 4,
      "value": "#Scenario Outline: Create Seller PO"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#Given User already on login page"
    },
    {
      "line": 7,
      "value": "#When title is seller"
    },
    {
      "line": 8,
      "value": "#Then enter data \"\u003cusername\u003e\" and \"\u003cpassword\u003e\""
    },
    {
      "line": 9,
      "value": "#Then Click login button"
    },
    {
      "line": 10,
      "value": "#Then Click on PO List"
    },
    {
      "line": 11,
      "value": "#Then Click on new PO"
    },
    {
      "line": 12,
      "value": "#Then Enter \"\u003cponame\u003e\" and \"\u003cclient\u003e\""
    },
    {
      "line": 13,
      "value": "#Then close browser"
    },
    {
      "line": 14,
      "value": "#"
    },
    {
      "line": 15,
      "value": "#Examples:"
    },
    {
      "line": 16,
      "value": "#\t| username | password | poname | client|"
    },
    {
      "line": 17,
      "value": "#\t| himanshu.singh@industrybuying.com | him | BDDAuto | Bluemoon |"
    },
    {
      "line": 18,
      "value": "#"
    },
    {
      "line": 20,
      "value": "#Using table"
    }
  ],
  "line": 21,
  "name": "Create Seller PO",
  "description": "",
  "id": "seller-po;create-seller-po",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "title is seller",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "enter data username and password",
  "rows": [
    {
      "cells": [
        "himanshu.singh@industrybuying.com",
        "him"
      ],
      "line": 26
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on PO List",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Click on new PO",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Enter poname and client",
  "rows": [
    {
      "cells": [
        "BDDAuto",
        "Bluemoon"
      ],
      "line": 31
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "UsingTable.user_already_on_login_page()"
});
formatter.result({
  "duration": 14225534541,
  "status": "passed"
});
formatter.match({
  "location": "UsingTable.title_is_seller()"
});
formatter.result({
  "duration": 80077229,
  "status": "passed"
});
formatter.match({
  "location": "UsingTable.enter_data(DataTable)"
});
formatter.result({
  "duration": 1900678349,
  "status": "passed"
});
formatter.match({
  "location": "UsingTable.click_login_button()"
});
formatter.result({
  "duration": 100956546,
  "status": "passed"
});
formatter.match({
  "location": "UsingTable.click_on_PO_List()"
});
formatter.result({
  "duration": 4791497825,
  "status": "passed"
});
formatter.match({
  "location": "UsingTable.click_on_new_PO()"
});
formatter.result({
  "duration": 1010439658,
  "status": "passed"
});
formatter.match({
  "location": "UsingTable.enter_and(DataTable)"
});
formatter.result({
  "duration": 1956860640,
  "status": "passed"
});
formatter.match({
  "location": "UsingTable.close_browser()"
});
formatter.result({
  "duration": 780309543,
  "status": "passed"
});
});