$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/User1/eclipse-workspace/javaenv/CucumberBDD/src/main/java/Features/createPO.feature");
formatter.feature({
  "line": 1,
  "name": "Seller PO",
  "description": "",
  "id": "seller-po",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create Seller PO",
  "description": "",
  "id": "seller-po;create-seller-po",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title is seller",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter data \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on PO List",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on new PO",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter \"\u003cponame\u003e\" and \"\u003cclient\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "seller-po;create-seller-po;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "poname",
        "client"
      ],
      "line": 15,
      "id": "seller-po;create-seller-po;;1"
    },
    {
      "cells": [
        "himanshu.singh@industrybuying.com",
        "him",
        "BDDAuto",
        "Bluemoon"
      ],
      "line": 16,
      "id": "seller-po;create-seller-po;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Create Seller PO",
  "description": "",
  "id": "seller-po;create-seller-po;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title is seller",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter data \"himanshu.singh@industrybuying.com\" and \"him\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on PO List",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on new PO",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter \"BDDAuto\" and \"Bluemoon\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_already_on_login_page()"
});
formatter.result({
  "duration": 13478134192,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.title_is_seller()"
});
formatter.result({
  "duration": 333397127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "himanshu.singh@industrybuying.com",
      "offset": 12
    },
    {
      "val": "him",
      "offset": 52
    }
  ],
  "location": "LoginStep.enter_data(String,String)"
});
formatter.result({
  "duration": 1291105401,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.click_login_button()"
});
formatter.result({
  "duration": 95306259,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.click_on_PO_List()"
});
formatter.result({
  "duration": 5996895028,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.click_on_new_PO()"
});
formatter.result({
  "duration": 562784054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BDDAuto",
      "offset": 7
    },
    {
      "val": "Bluemoon",
      "offset": 21
    }
  ],
  "location": "LoginStep.enter_and(String,String)"
});
formatter.result({
  "duration": 1835691292,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.close_browser()"
});
formatter.result({
  "duration": 1070621043,
  "status": "passed"
});
});