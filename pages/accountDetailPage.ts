
import { $$ ,$, ElementFinder, ElementArrayFinder } from "protractor";

export class AccountDetailPageObject {
    public accountList: ElementFinder;
    public allOptions: ElementArrayFinder;
    public logoutBtn: ElementFinder;

    constructor() {
        this.accountList = $('select[id="listAccounts"]')
        this.allOptions = $$('select[id="listAccounts"] option')  // Get all options into array
        this.logoutBtn = $('a[id="LoginLink"]')
    }
}