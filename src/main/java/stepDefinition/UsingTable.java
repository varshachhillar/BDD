//package stepDefinition;
//
//import java.util.List;
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.support.ui.Select;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//public class UsingTable {
//
//	WebDriver driver;
//
//	@Given("^User already on login page$")
//	public void user_already_on_login_page() {
//		System.setProperty("webdriver.chrome.driver", "C:\\Users\\User1\\Desktop\\AutoEnv\\chromedriver_win32\\chromedriver.exe");
//		driver = new ChromeDriver();
//		driver.get("http://seller.qa4.industrybuying.com");
//		driver.manage().window().maximize();
//		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
//		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//	}
//
//	@When("^title is seller$")
//	public void title_is_seller() {
//		String title = driver.getTitle();
//		System.out.println(title);
//		Assert.assertEquals(title, "Industrybuying Seller Hub");
//	}
//
//	@Then("^enter data username and password")
//	public void enter_data(DataTable logindata) {
//		List<List<String>> data = logindata.raw();
//		driver.findElement(By.name("email")).sendKeys(data.get(0).get(0));
//		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
//	}
//
//	@Then("^Click login button$")
//	public void click_login_button() {
//		WebElement loginbtn = driver.findElement(By.xpath("//button[contains(text(),\"Log in\")]"));
//		JavascriptExecutor js = (JavascriptExecutor)driver;
//		js.executeScript("arguments[0].click();", loginbtn);
//
//	}
//
//	@Then("^Click on PO List$")
//	public void click_on_PO_List()  {
//		WebElement polist = driver.findElement(By.xpath("//*[contains(text(),'PO List')]"));
//		JavascriptExecutor js = (JavascriptExecutor)driver;
//		js.executeScript("arguments[0].click();", polist);
//
//	}
//
//	@Then("^Click on new PO$")
//	public void click_on_new_PO() {
//		WebElement newpo = driver.findElement(By.xpath("//*[contains(text(),'New PO')]//parent::button"));
//		JavascriptExecutor js = (JavascriptExecutor)driver;
//		js.executeScript("arguments[0].click();", newpo);
//
//	}
//
//	@Then("^Enter poname and client")
//	public void enter_and(DataTable podetail) {
//		List<List<String>> data = podetail.raw();
//		driver.findElement(By.id("input_0")).sendKeys(data.get(0).get(0));
//		WebElement client = driver.findElement(By.xpath("//select[@name='client']"));
//		JavascriptExecutor js = (JavascriptExecutor)driver;
//		js.executeScript("arguments[0].click();", client);
//		Select select = new Select (client);
//		select.selectByVisibleText(data.get(0).get(1));
//		WebElement create = driver.findElement(By.xpath("//button/span[contains(text(),'Create')]"));
//		js.executeScript("arguments[0].click();", create);
//
//	}
//
//	@Then("^close browser$")
//	public void close_browser() {
//		driver.quit();
//
//	}
//
//}
//
