package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//the path of the feature files
		features = "C:\\Users\\User1\\eclipse-workspace\\javaenv\\CucumberBDD\\src\\main\\java\\Features\\createPO.feature",
		
		//the path of the step definition files
		glue={"stepDefinition"},
		
		//to generate different types of reporting
		plugin= {"pretty","html:test-output", "json:json-output/cucumber.json", "junit:junit-xml/cucumber.xml"},
		
		//display the console output in a proper readable format
		monochrome = true, 
		
		//it will check if any step is not defined in step definition file
		strict = false, 
		
		//to check the mapping is proper between feature file and step def file
		dryRun = false 
		
//		//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}			
		)

public class TestRunner {

}
