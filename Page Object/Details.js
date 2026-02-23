class Details {
    constructor(page) {
        this.page = page;
        this.addToCartBtn= page.getByRole("link", {name:"Add to cart"});   
        this.cart= page.locator("#cartur");
        this.placeodr= page.getByRole("button", {name:"Place Order"});
        this.Name = page.locator("#name");
        this.Country = page.locator("#country");
        this.City = page.locator("#city");
        this.CreditCard = page.locator("#card");
        this.Month = page.locator("#month");
        this.Year = page.locator("#year");
        this.PurchaseBtn = page.getByRole("button", { name: "Purchase" });
        this.orderModal = page.locator("#orderModal");
        
    }
    
    async fillDetails(name, country, city, creditCard, month, year) {
        await this.Name.fill(name);
        await this.Country.fill(country);
        await this.City.fill(city);
        await this.CreditCard.fill(creditCard);
        await this.Month.fill(month);
        await this.Year.fill(year);
    }
    async clickPurchase() {
        await this.PurchaseBtn.click();
    }
    async clickCart()
{
    await this.cart.click();
} 
async placeOrder()
{
    await this.placeodr.click();
    await this.orderModal.waitFor({ state: "visible" });
}  

}
module.exports = Details;
