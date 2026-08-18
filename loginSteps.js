import {Given , When ,Then} from "@cucumber/cucumber";
import { chromium ,expect} from "@playwright/test";
// import {strictEqual} from 'assert'

let browser,page;

Given("user is on saas login page",async ( )=> {
    browser=await chromium.launch({headless:false});
    page=await browser.newPage();
    await page.goto("https://www.saucedemo.com/")
})

When("user enters username", async () => {
    await page.fill("#user-name","standard_user")
})

When("user enters password", async () => {
    await page.fill("#password","secret_sauce")
})

When("user clicks login button",async () => {
    await page.click("#login-button")
})

Then("user should see homepage",async () => {
    const title=await page.title();
    // strictEqual(title,"Swag Labs")
    expect(title).toContain("Swag Labs")
    await browser.close();
})

Then("user should see username required error",async () => {
    const error=await page.locator("h3").textContent();
    expect(error).toContain("Username is required");
    await browser.close();
})

Then("user should see password required error",async () => {
    const error=await page.locator("h3").textContent();
    expect(error).toContain("Password is required");
    await browser.close();
})