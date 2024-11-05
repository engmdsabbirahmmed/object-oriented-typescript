"use strict";
{
    //encapsulation
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
        getBalanceHiddenMethod() {
            return this._balance;
        }
    }
    const goriberAccount = new BankAccount(123, 'Md. Sabbir', 20);
    goriberAccount.addDeposit(40);
    // console.log(goriberAccount._balance)
    console.log(goriberAccount.getBalanceHiddenMethod());
}
