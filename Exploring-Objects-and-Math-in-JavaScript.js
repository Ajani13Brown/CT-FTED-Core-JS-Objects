// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.

class Account{
    constructor(accountNumber, balance, owner){
        this.accountNumber = accountNumber
        this.balance = balance
        this.owner = owner
    }
// Task 2: Implement methods within the Account object to deposit and withdraw funds.
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposit of ${amount} successful. New balance is ${this.balance}.`);
        } else {
            console.log('Deposit amount must be greater than zero.');
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`Withdrawal of ${amount} successful. New balance is ${this.balance}.`);
            } else {
                console.log('Insufficient funds.');
            }
        } else {
            console.log('Withdrawal amount must be greater than zero.');
        }
    }

    interest(rate, years) {
        if (rate > 0 && years > 0) {
            let initialBalance = this.balance;
            let compoundInterest = initialBalance * Math.pow((1 + rate / 100), years) - initialBalance;
            console.log(`After ${years} years at ${rate}% interest, the balance will be ${this.balance + compoundInterest}.`);
        } else {
            console.log('Interest rate and number of years must be greater than zero.');
        }
    }
}

let newAccount = new Account('1234567890', 10000, 'Alice');

newAccount.withdraw(250)
newAccount.deposit(500)
newAccount.interest(10,5)