{
    //getter and setter:
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number) {
            return this._balance = amount + this._balance;
        }

        getBalance() {
            return this._balance;
        }

        //getter
        get balance() {
            return this._balance;
        };

        //setter
        set deposit(amount: number) {
            // this._balance = this.balance + amount;
            this._balance = this.balance + amount;
        }
    }



    const poorAccountHolder = new BankAccount(122, 'Md. Sabbir Ahmmed', 80);
    // poorAccountHolder.addDeposit(50); //using function.
    poorAccountHolder.deposit=60; //using setter
    const poorAccountHolderBalance = poorAccountHolder.balance; //using getter
    console.log(poorAccountHolderBalance)


    // console.log(poorAccountHolder.getBalance()) //using function
}