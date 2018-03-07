package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features =  "C:\\Users\\User1\\eclipse-workspace\\javaenv\\CucumberBDD\\src\\main\\java\\Features\\cumtest.feature",
        glue = "stepDefinition\\cumteststep",
        snippets = SnippetType.CAMELCASE,
        plugin = {"pretty"},
        monochrome = true,
        strict = false,
        dryRun = false,
        tags = {"~@datamaptest,@datalisttest,~@exampletest"}

)

public class testrunner1 {
}
