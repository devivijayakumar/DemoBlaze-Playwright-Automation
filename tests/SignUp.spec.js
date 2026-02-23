const { test, expect } = require("@playwright/test");
//const SignUp = require("../Page Object/SignUp");
const POManager = require("../Page Object/POManager");

let signUp;
 test.beforeEach(async ({ page }) => {
   const pomanager = new POManager(page);
     signUp= pomanager.getSignUp();
});

test.skip("Sign Up test", async ({ page }) => {
    //const signUp= new SignUp(page);
    const userName="tutestuser1";
    const Password="tutestuser2";
    await signUp.goTo(); 
    const popupPromise = signUp.handlePopup();
    await signUp.SignUp(userName, Password);
    const popupMessage = await popupPromise;
    await expect(popupMessage).toContain("Sign up successful.");
})
test("Close Sign Up test", async ({ page }) => {
    //const signUp= new SignUp(page);
    const userName="tutestuser";
    const Password="tutestuser";
    await signUp.goTo();
    await signUp.closeSignUp(userName, Password);
    await expect(page.locator("#signInModal")).not.toBeVisible();

})
