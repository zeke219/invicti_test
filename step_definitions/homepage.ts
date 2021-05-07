// import { assert } from "console";
import { browser } from "protractor";
import { HomepageObject } from "../pages/homepage";
import { LoginPageObject } from "../pages/loginPage"
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const assert = chai.assert;

const homepage: HomepageObject = new HomepageObject();
const loginpage: LoginPageObject = new LoginPageObject();

When(/^I get into homepage$/, async () => {
  await browser.get("/");
  await expect(browser.getTitle()).to.eventually.equal("Altoro Mutual");
});

When(/^I click on Login$/, async () => {
await homepage.loginBtn.click();
await assert.exists(loginpage.loginForm)
});
  
Then(/^I should see the logo$/, async () => {
  await assert.exists(homepage.logo);
});

Then(/^I should see login button$/, async () => {
    await assert.exists(homepage.loginBtn);
    await expect(homepage.loginBtn.getAttribute("href")).to.eventually.equal(
        "http://demo.testfire.net/login.jsp"
      );
  });  

Then(/^I should see navigation headers$/, async () => {
  await expect(homepage.accountLink.getAttribute("href")).to.eventually.equal(
    "http://demo.testfire.net/login.jsp"
  );
  await expect(homepage.personalLink.getAttribute("href")).to.eventually.equal(
    "http://demo.testfire.net/index.jsp?content=personal.htm"
  );
  await expect(
    homepage.smallBusinessLink.getAttribute("href")
  ).to.eventually.equal(
    "http://demo.testfire.net/index.jsp?content=business.htm"
  );
  await expect(
    homepage.insideLink.getAttribute("href")
  ).to.eventually.equal(
    "http://demo.testfire.net/index.jsp?content=inside.htm"
  );
  
});
