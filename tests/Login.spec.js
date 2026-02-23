
const Login = require("../Page Object/Login");
const { test, expect } = require("@playwright/test");
const { readLoginData } = require("../Utils/ExlReader");
const ExcelJS = require("exceljs");
const POManager = require("../Page Object/POManager");
let loginData;
let login;
test.beforeEach(async ({ page }) => {
   const pomanager = new POManager(page);
    login = pomanager.getLoginPage();
});
test.beforeAll(async () => {   
  loginData = await readLoginData(); 
}); 

test("Valid Login test", async ({ page }) => {   
    await login.goTo();
    await login.loginUser(
        loginData[0].username,
        loginData[0].password
    );
    await expect(page.locator("#logout2")).toBeVisible();
})
test("Invalid username Valid password Login test", async ({ page }) => {
    await login.goTo();
    const popupPromise = login.handlePopup();
    await login.loginUser(
        loginData[1].username,
        loginData[1].password
    );
    const popupMessage = await popupPromise;
    await expect(popupMessage).toContain("User does not exist.","Wrong password.");
    
})
test("Valid username Invalid password Login test", async ({ page }) => {
    await login.goTo();
     const popupPromise = login.handlePopup();
    await login.loginUser(
        loginData[2].username,
        loginData[2].password
    );
   const popupMessage = await popupPromise;
    await expect(popupMessage).toContain("Wrong password.");
})
test("Invalid username Invalid password Login test", async ({ page }) => {
    await login.goTo();
    const popupPromise = login.handlePopup();
    await login.loginUser(
        loginData[3].username,
        loginData[3].password
    );
    const popupMessage = await popupPromise;
    await expect(popupMessage).toContain("User does not exist.","Wrong password.");
    await expect(["Wrong password.","User does not exist."]).toContain(popupMessage);
})