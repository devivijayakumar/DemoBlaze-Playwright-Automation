const Cart = require("./Cart");
const Details = require("./Details");
const Login = require("./Login");
const Logout = require("./Logout");
const SignUp = require("./SignUp");

class POManager
{
    constructor(page)
    {
        this.page=page;
        this.cart= new Cart(this.page);
        this.details= new Details(this.page);
        this.login= new Login(this.page);
        this.logout= new Logout(this.page);
        this.signup= new SignUp(this.page);
    }
    getLoginPage()
    {
        return this.login;
    }
    getSignUp()
    {
        return this.signup;
    }
    getCart()
    {
        return this.cart;
    }
    getLogout()
    {
        return this.logout;
    }
    getDetails()
    {
        return this.details;
    }
}
module.exports= POManager;