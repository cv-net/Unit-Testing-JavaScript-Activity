var expect = require('chai').expect;

// getCurrentBalance() it(prints balance)
describe('getCurrentBalance', function () {
    let getCurrentBalance = require('../src/ATM.js').getCurrentBalance;
	//Test spec (unit test)
	it('should return the value in the balance property', function() {
		expect(getCurrentBalance).to.equal(100);
	});
});


// deposit() it(stores deposit in deposit propertyfor applyInterest)

// withdraw() it(checks if withdraw(amount) <= balance)

// applyInterest() it(adds product to balance)

// applyInterest() it(withdraw = deposit * (1 + interestRate))
