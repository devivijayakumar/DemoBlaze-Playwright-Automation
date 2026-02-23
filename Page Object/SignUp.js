
class SignUp
{


    constructor(page)
        {
            this.page = page;
            this.username= page.locator("#sign-username");
            this.password= page.locator("#sign-password");
            this.SignUpBtn= page.getByRole("button", { name: "Sign up" })
            this.close=  page.getByRole("button", { name: "Close" }).last();
            this.SignupHome = page.getByRole("link", { name: "Sign up" });
        }
        async goTo()
        {           
            await this.page.goto("https://www.demoblaze.com/");
        }
        async SignUp(username, password)
        {
            
            await this.SignupHome.click();
            await this.username.fill(username);
            await this.password.fill(password);
            await this.SignUpBtn.click();                        
        }
        async closeSignUp(userName, Password)
        {
           
            await this.SignupHome.click();
            await this.username.fill(userName);
            await this.password.fill(Password);
            await this.close.click();
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
   module.exports = SignUp;     