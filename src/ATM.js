
class ATM {
    constructor() {
        // this.balance = balance;
    }

    getCurrentBalance() {
        return 100;
    }
}

// var myAccount = new ATM(100);

// function getCurrentBalance() {
//     return myAccount.balance;
// }

// console.log(myAccount.balance);
// console.log(getCurrentBalance())

module.exports = ATM;


// |ATM|
// | - |
// | balance: number |
// | interestRate: number |
// | withdraw(amount: number) |
// | deposit(amount: number) |
// | applyInterest() |
// | getCurrentBalance(): number |

// Withdraw = deposit * ( 1 + interestRate )

//var expect = require('chai').expect;

// Test suite
