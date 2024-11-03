"use strict";
{
    //
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
    }
    class StudentAccount extends BankAccount {
        test() {
            // this._balance   //it is show, because it is protected, and protected property shown at child class         
        }
    }
    const poorAccountHolder = new BankAccount(122, 'Md. Sabbir Ahmmed', 80);
    poorAccountHolder.addDeposit(50);
    // console.log(poorAccountHolder.getBalance());
    //
}
