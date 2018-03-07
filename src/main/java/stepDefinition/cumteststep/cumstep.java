package stepDefinition.cumteststep;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import  org.junit.Assert;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

public class cumstep {

    WebDriver driver;

    @Before
    public void beforestep (){
        System.out.println("BeforeStep");
    }

    @Before(value = "@third" )
    public void beforestep333 (){
        System.out.println("BeforeStep333");
    }

    @After
    public void Afterstep (){
        System.out.println("AfterStep");
    }

    @Given("^User on login page$")
    public void userOnLoginPage() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\User1\\Desktop\\AutoEnv\\chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver();
        System.out.println("login page");
        driver.get("http://seller.qa4.industrybuying.com");
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @When("^title is seller$")
    public void titleIsSeller() {
        System.out.println("seller title");
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals(title, "Industrybuying Seller Hub");
    }

    @Then("^enter data \"(.*)\" and \"(.*)\"$")
    public void enterDataAnd(String username, String  password) {
        System.out.println("Enter data");
        driver.findElement(By.name("email")).sendKeys(username);
        driver.findElement(By.name("password")).sendKeys(password);
    }

    @Then("^enter datalist username and password$")
    public void enterDatalistUsernameAndPassword(DataTable cred)  {
        List<List<String>> data = cred.raw();
        driver.findElement(By.name("email")).sendKeys(data.get(0).get(0));
        driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));    }


    @Then("^enter datamap username and password$")
    public void enterDatamapUsernameAndPassword(DataTable cred)  {
        for(Map<String,String> data : cred.asMaps(String.class,String.class)){
            driver.findElement(By.name("email")).sendKeys(data.get("username"));
            driver.findElement(By.name("password")).sendKeys(data.get("password"));
        }

    }

    @Then("^Click login button$")
    public void clickLoginButton() {
        System.out.println("Click login button");
        WebElement loginbtn = driver.findElement(By.xpath("//button[contains(text(),\"Log in\")]"));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", loginbtn);
    }

    @Then("^user is on home page$")
    public void userIsOnHomePage() {
        System.out.println("home page");
    }

    @Then("^Close Browser$")
    public void closeBrowser() {
        System.out.println("Close Browser");
        driver.quit();

    }

    }
