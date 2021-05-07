
import { $, ElementFinder } from "protractor";

export class HomepageObject {
    public accountLink: ElementFinder;
    public personalLink: ElementFinder;
    public logo: ElementFinder;
    public loginBtn: ElementFinder;
    public smallBusinessLink: ElementFinder;
    public insideLink: ElementFinder;

    constructor() {
        this.accountLink = $("a[id='AccountLink']");
        this.personalLink = $("a[id='LinkHeader2']");
        this.smallBusinessLink = $("a[id='LinkHeader3']");
        this.insideLink = $("a[id='LinkHeader4']");
        this.logo = $("img[src='/images/logo.gif']");
        this.loginBtn = $("a[id='LoginLink']")
    }
}