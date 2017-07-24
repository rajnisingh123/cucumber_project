package Step_definition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Yahooalogin_StepDefinition {
	WebDriver driver=null;
	
	@Given("^User opens yahoo page$")
	public void user_enters_on_LogInPage()
	{
		System.setProperty("webdriver.gecko.driver" , "C:/Users/Admin/Downloads/geckodriver.exe");
		driver=new FirefoxDriver();
		driver.get("https://login.yahoo.com/");
	}
	
	@Then("^User enters (\\d+)$")
	public void enter_Email_Id(int email)
	{
		//driver.findElement(By.xpath("//input[@id='login-username']")).sendKeys(email);
		System.out.println(email);
	}
	@Then("^Click on next Button$")
	public void clickNextButton()
	{
		driver.findElement(By.xpath("//input[@id='login-signin']")).click();

	}
	

}
