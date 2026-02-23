class Login 
{
    constructor(page)
    {
        this.page=page;
        this.loginHome=page.locator("#login2");
        this.userName= page.locator("#loginusername")
        //page.getByLabel('Username:');
        this.passWord= page.locator("#loginpassword")
        //page.getByLabel('Password:');
        this.loginBtn= page.getByRole("button", { name: "Log in" });
        this.loginModal = page.locator("#logInModal");

    }
    async goTo()
    {
        await this.page.goto("https://www.demoblaze.com/");
    }
    async loginUser(username, password)
    {
        await this.loginHome.click();
        await this.loginModal.waitFor({ state: "visible" });
        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.loginBtn.click();
    }
    async handlePopup() {

    return new Promise(resolve => {

        this.page.once("dialog", async dialog => {

            const msg = dialog.message();
            await dialog.accept();

            resolve(msg); // send message back to test
        });

    });
}
}

module.exports= Login;

