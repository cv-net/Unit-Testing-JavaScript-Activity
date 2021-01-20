# Unit Testing JavaScript Activity

## Setup

In the root directory, run the following to:

Install all the required packages
```bash
npm install -g mocha 
npm install --save-dev chai
npm install
```

Run the test cases
```bash
npm test
```

## Part 1
Using BDD, implement the logic for a class `ATM`. Find the class diagram for `ATM` below:

|ATM|
| - |
| amount: number |
| interestRate: number |
| withdraw(amount: number) |
| deposit(amount: number) |
| applyInterest() |
| getCurrentBalance(): number |

## Part 2
Using BDD, implement the logic for a class `Tesla`. Find the class diagram for `Tesla` below:
|Tesla|
| - |
| MILES_PER_PERCENTAGE: number = 2.5 |
| chargeRemaining: number |
| charge(amount: number) |
| fullCharge() |
| drive(miles: number) |
| getRemainingCharge(): number |

## Submission
Push to GitHub and create a Pull Request
