const { test, expect } = require("@playwright/test");
const Login = require("../Page Object/Login");
const Logout = require("../Page Object/Logout");
const POManager = require("../Page Object/POManager");

let logout;
test.beforeEach(async ({ page }) => {
   const pomanager = new POManager(page);
    logout = pomanager.getLogout();
});

test("log out user ", async ({ page }) => {
    const userName="tutest";
    const Password="tutest";
    await logout.goTo();
    await logout.loginUser(userName, Password);
    await expect(page.locator("#logout2")).toBeVisible();
    await logout.logOutUser();
    await expect(page.locator("#login2")).toBeVisible();
})