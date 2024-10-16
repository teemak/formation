class ATM {
    constructor(user, balance = 0) {
        this.user = user;
        this.balance = balance;
    }
    // check balance
    checkBalance() {
        return this.balance;
    }
    // deposit
    deposit(amount) {
        this.balance = this.balance + amount;
        return this.balance;
    }
    // withdraw
    withdraw(amount) {
        if(this.balance < amount) return 'Insufficient funds';
        this.balance = this.balance - amount;
        return this.balance;
    }
}

const user1 = new ATM('Tee', 108);
const user2 = new ATM('Erza', 888);

console.log(user1.checkBalance());
console.log(user2.checkBalance());

user2.deposit(54.88);
console.log('Erza\'s balance: ', user2.checkBalance());

console.log('Tee\'s withdrawal status:', user1.withdraw(110));

/*
class Account {
  constructor(initialBalance = 0.0) {
    this.balance = initialBalance;
  }

  deposit(amount) {
    this.balance += amount;
    return `Deposit successful: Your new balance is $${this.balance.toFixed(2)}`;
  }

  withdraw(amount) {
    if (this.balance < amount) {
      return 'Withdrawal failed: Insufficient funds.';
    }
    this.balance -= amount;
    return `Withdrawal successful: Your new balance is $${this.balance.toFixed(2)}`;
  }
}

class ATM {
  constructor() {
    this.accounts = {};
  }

  createAccount(initialBalance = 0.0) {
    const accountId = Object.keys(this.accounts).length + 1;
    this.accounts[accountId] = new Account(initialBalance);
    return accountId;
  }

  getBalance(accountId) {
    const account = this.accounts[accountId];
    if (account) {
      return account.balance;
    } else {
      return null;
    }
  }

  deposit(accountId, amount) {
    const account = this.accounts[accountId];
    if (account) {
      return account.deposit(amount);
    } else {
      return 'Deposit failed: Account not found';
    }
  }

  withdraw(accountId, amount) {
    const account = this.accounts[accountId];
    if (account) {
      return account.withdraw(amount);
    } else {
      return 'Withdrawal failed: Account not found';
    }
  }
}
*/
