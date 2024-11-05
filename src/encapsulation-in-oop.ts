{
    //encapsulation
    class BankAccount{
        public readonly id: number;
        public name: string;
        private _balance:number;
        constructor(id:number,name:string,_balance:number){
            this.id=id;
            this.name=name;
            this._balance=_balance;
        }

        public addDeposit (amount:number){
            this._balance= this._balance+amount
        }

        private getBalance(){
            return this._balance
        }

        getBalanceHiddenMethod(){
            return this._balance
        }
    }

    const goriberAccount = new BankAccount(123, 'Md. Sabbir', 20);
    goriberAccount.addDeposit(40)
    // console.log(goriberAccount._balance)
    console.log(goriberAccount.getBalanceHiddenMethod());

}