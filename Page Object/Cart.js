class Cart 
{
    constructor(page)
    {
        this.page= page;
        this.phonesectn=page.getByRole("link", {name:"Phones"});
        this.phone= page.getByRole("link", {name:"Nokia lumia 1520"});
        this.monitorsectn= page.getByRole("link",{name:"Monitors"});
        this.monitor= page.getByRole("link", {name:"Apple monitor 24"});
        this.loginHome=page.locator("#login2");
        this.userName= page.locator("#loginusername")      
        this.passWord= page.locator("#loginpassword")
        this.loginBtn= page.getByRole("button", { name: "Log in" });
        this.product= page.getByRole("link", {name:"Samsung galaxy s6"});
        this.addToCartBtn= page.getByRole("link", {name:"Add to cart"});
        
        
    }
       async goTo()
    {
        await this.page.goto("https://www.demoblaze.com/");
    }
    async loginUser(username, password)
    {
        await this.loginHome.click();
        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.loginBtn.click();
    }
    async addProductToCart()
    {
        await this.product.click();
        await this.addToCartBtn.click();
    }
    
    async handlePopup() {

    return new Promise(resolve => {

        this.page.once("dialog", async dialog =>
             {

            const msg = dialog.message();
            await dialog.accept();

            resolve(msg); // send message back to test
            });

    });

}
async addPhoneToCart()
    {
        await this.phonesectn.click();
        await this.phone.click();
        await this.addToCartBtn.click();
    }
async addMonitorToCart()
{
    await this.monitorsectn.click();
    await this.monitor.click();
    await this.addToCartBtn.click();
}

}
module.exports= Cart;
    