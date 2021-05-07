import { AccountDetailPageObject } from "../pages/accountDetailPage";
import { LoginPageObject } from "../pages/loginPage";
import { HomepageObject } from "../pages/homepage";
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const assert = chai.assert;

const homepage: HomepageObject = new HomepageObject();
const loginpage: LoginPageObject = new LoginPageObject();
const accountDetailPage: AccountDetailPageObject = new AccountDetailPageObject();

When(/^I enter correct username$/, async () => {
  await loginpage.usernameField.sendKeys("admin");
});

When(/^I enter correct password$/, async () => {
  await loginpage.passwordField.sendKeys("admin");
});

When(/^I submit the form$/, async () => {
  await loginpage.loginForm.submit();
});

Then(/^I should successfully login as admin$/, async () => {
  await assert.exists(accountDetailPage.accountList);
});

Then(/^There should be two accounts in the list$/, async () => {
  await expect((await accountDetailPage.allOptions).length).to.equal(2);
  // get length of all options
});

Then(/^I am able to logout$/, async () => {
  await accountDetailPage.logoutBtn.click();
  await assert.exists(homepage.loginBtn);
  // confirm user is logged out by checking presence of login button
});
