
const { test, expect } = require('@playwright/test');
const Cart = require('../Page Object/Cart');
const Details = require('../Page Object/Details');
const testdata= require('../Utils/Details.json');
const POManager = require('../Page Object/POManager');

let cart;
let details;
test.beforeEach(async ({ page }) => {
   const pomanager = new POManager(page);
    cart= pomanager.getCart();
    details= pomanager.getDetails();
});

test("place order for a mobile phone", async({page})=>{
       // const cart= new Cart(page);
        //const details= new Details(page);
        await cart.goTo();
        await cart.loginUser("tutest", "tutest");
        await expect(page.locator("#logout2")).toBeVisible();
        const popupPromise = cart.handlePopup(); // listen first
       await cart.addPhoneToCart();  // trigger popup
        const popupMessage = await popupPromise; // wait & capture
        await expect(popupMessage).toContain("Product added");
        await details.clickCart();
        await details.placeOrder();
        await details.fillDetails(
            testdata[0].name,
            testdata[0].country,
            testdata[0].city,
            testdata[0].creditCard,
            testdata[0].month,
            testdata[0].year    
        )
         await details.clickPurchase();
         await expect(page.getByText("Thank you for your purchase!")).toBeVisible();

    })
    test("place order for a monitor", async({page})=>{
        //const cart= new Cart(page);
        //const details= new Details(page);
        await cart.goTo();
        await cart.loginUser("tutest", "tutest");
        await expect(page.locator("#logout2")).toBeVisible();
        const popupPromise = cart.handlePopup(); // listen first
       await cart.addMonitorToCart();  // trigger popup
        const popupMessage = await popupPromise; // wait & capture
        await expect(popupMessage).toContain("Product added");
        await details.clickCart();
        await details.placeOrder();
        await details.fillDetails(
            testdata[0].name,
            testdata[0].country,
            testdata[0].city,
            testdata[0].creditCard,
            testdata[0].month,
            testdata[0].year    
        )
         await details.clickPurchase();
         await expect(page.getByText("Thank you for your purchase!")).toBeVisible();

    })