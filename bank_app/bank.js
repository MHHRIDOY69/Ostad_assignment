class BankAccount{
    constructor(accountNumber, ownerName, balance){
        this.accountNumber=accountNumber;
        this.ownerName=ownerName;
        this.balance=balance;
    }

    deposite(amount){
        this.damount=amount;
        console.log('Deposited amount : '+this.damount);
        this.balance=this.balance+this.damount;
    }

    withdraw(amount){
        this.wamount=amount;
        console.log('Withdraw amount request : '+this.wamount);
        if(this.wamount<this.balance){
            this.balance=this.balance-this.damount;
            console.log('Successfully Withdrawn!');
        }
        else{
            console.log('Insufficient balance!');
        }
    }

    getBalance(){
        console.log('Current balance : '+this.balance);
    }
    
    displayAccountInfo(){
        console.log('Account Number : '+this.accountNumber);
        console.log('Owner Name : '+this.ownerName);
        console.log('Balance : '+this.balance);
    }


}

const person1 = new BankAccount(101, 'Hasan', 5000);
const person2 = new BankAccount(102, 'Hridoy', 6000);

person1.displayAccountInfo();
console.log('=============================');
person1.deposite(2000);
console.log('=============================');
person1.displayAccountInfo();
console.log('=============================');
person1.withdraw(8000);
console.log('=============================');
person1.getBalance();
console.log('=============================');
person1.displayAccountInfo();
console.log('=============================');
person1.withdraw(2000);
console.log('=============================');
person1.getBalance();


