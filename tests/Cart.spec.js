const { test, expect } = require("@playwright/test");
const Cart = require("../Page Object/Cart");
const POManager = require("../Page Object/POManager");

let cart;
test.beforeEach(async ({ page }) => {
   const pomanager = new POManager(page);
    cart = pomanager.getCart();
});

test("Add product to cart", async ({ page }) => {
    //const cart= new Cart(page);
    const userName="tutest";
    const Password="tutest";
    await cart.goTo();
    await cart.loginUser(userName, Password);
    await expect(page.locator("#logout2")).toBeVisible();
    const popupPromise = cart.handlePopup();
    await cart.addProductToCart();
    const popupMessage = await popupPromise;
    await expect(popupMessage).toContain("Product added.");

})
