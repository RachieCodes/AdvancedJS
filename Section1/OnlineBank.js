// Inheritance and Super Keyword

class BankAccount {
    constructor(accountHolder, accountNumber,balance = 0) {
        this.balance = balance;
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
    }
    deposit(amt) {
        if (amt > 0) {
            this.balance += amt;
            console.log(`Deposited $${amt}. New balance: $${this.balance}`);
        } else {
            console.log((`Invalid deposit amount: $${amt}. Deposit must be greater than 0.`));
        }
    }
    withdraw(amt) {
        if (amt < this.balance) {
            this.balance -= amt; 
            console.log(`Withdrew $${amt}. New balance: $${this.balance}`);
        }
        else {
            console.log(`Insufficient funds. Current balance: $${this.balance}`);
        }
    }
}

class OnlineBankAccount extends BankAccount {
    constructor(accountHolder, accountNumber, balance = 0) {
        super(accountHolder, accountNumber, balance);
         this.aaa = "test";
    }
}