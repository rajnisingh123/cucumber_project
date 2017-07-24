package Step_definition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/Step_definition/logIn.feature" , glue={"Step_definition"},
			plugin={"html:target/cucumber-html-report"})

public class YaahooRunnerTest {

}
