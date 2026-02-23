class Logout
{
    constructor(page)
    {
        this.page=page;
        this.loginHome=page.locator("#login2");
        this.userName= page.locator("#loginusername")      
        this.passWord= page.locator("#loginpassword")
        this.loginBtn= page.getByRole("button", { name: "Log in" });
        this.logout= page.getByRole("link",{name:"Log out"});
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
    async logOutUser()
    {
        await this.logout.click();
    }
}
module.exports= Logout;