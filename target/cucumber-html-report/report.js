$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Step_definition/logIn.feature");
formatter.feature({
  "line": 1,
  "name": "logIn Application Testing",
  "description": "",
  "id": "login-application-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Yahoo  LogIn Test",
  "description": "",
  "id": "login-application-testing;yahoo--login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User opens yahoo page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters 50",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Yahooalogin_StepDefinition.user_enters_on_LogInPage()"
});
formatter.result({
  "duration": 21681151217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 12
    }
  ],
  "location": "Yahooalogin_StepDefinition.enter_Email_Id(int)"
});
formatter.result({
  "duration": 2815278,
  "status": "passed"
});
formatter.match({
  "location": "Yahooalogin_StepDefinition.clickNextButton()"
});
formatter.result({
  "duration": 351751851,
  "status": "passed"
});
});