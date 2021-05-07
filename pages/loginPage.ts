
import { $, ElementFinder } from "protractor";

export class LoginPageObject {
    public loginForm: ElementFinder;
    public usernameField: ElementFinder;
    public passwordField: ElementFinder;

    constructor() {
        this.loginForm = $("form[id='login']");
        this.usernameField = $("input[id='uid']")
        this.passwordField = $("input[id='passw']")
    }
}