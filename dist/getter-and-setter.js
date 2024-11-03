"use strict";
{
    //getter and setter:
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount) {
            return this._balance = amount + this._balance;
        }
        getBalance() {
            return this._balance;
        }
        //getter
        get balance() {
            return this._balance;
        }
        ;
        //setter
        set deposit(amount) {
            // this._balance = this.balance + amount;
            this._balance = this.balance + amount;
        }
    }
    const poorAccountHolder = new BankAccount(122, 'Md. Sabbir Ahmmed', 80);
    // poorAccountHolder.addDeposit(50); //using function.
    poorAccountHolder.deposit = 60; //using setter
    const poorAccountHolderBalance = poorAccountHolder.balance; //using getter
    console.log(poorAccountHolderBalance);
    // console.log(poorAccountHolder.getBalance()) //using function
}
