import {Given , When ,Then} from "@cucumber/cucumber";
import { chromium ,expect} from "@playwright/test";

let browser,page;

Given("user is on Amazon homepage",async()=>{
    // browser=await chromium.launch({Headers:false});
    browser = await chromium.launch({ headless: false });
    page=await browser.newPage();
    await page.goto("https://www.amazon.in/");
})

When("user locators searchbox using Id Selectors and enters the text",async()=>{
    const searchbox=page.locator("#twotabsearchtextbox")
     await searchbox.fill("Id Selector");
     await page.waitForTimeout(3000);
     await browser.close();
})

When("user locators searchbox using Class Selectors and enters the text",async()=>{
    // const searchbox=page.locator(".nav-input.nav-progressive-attribute")
    const searchbox = page.locator("input.nav-input.nav-progressive-attribute").first();
     await searchbox.fill("Class Selector");
     await page.waitForTimeout(3000);
     await browser.close();
})

When("user locators searchbox using attribute Selectors and enters the text",async()=>{
    const searchbox=page.locator("input[aria-label='Search Amazon.in']");
     await searchbox.fill("attribute Selector");
     await page.waitForTimeout(3000);
     await browser.close();
})

When("user locators searchbox using Tag and Id Selectors and enters the text",async()=>{
    const searchbox=page.locator("input#twotabsearchtextbox");
     await searchbox.fill("Tag and Id Selector");
     await page.waitForTimeout(3000);
     await browser.close();
})

