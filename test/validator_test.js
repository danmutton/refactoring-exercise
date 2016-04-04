import Validator from '../src/validator';
import assert from 'assert';
describe('Validator', function() {

    describe('customerHasValidFirstName', function () {
        it('should not allow undefined', function () {
            assert.equal(Validator.customerHasValidFirstName(), false);
        });
        it('should not allow over 500 characters', function () {
            assert.equal(Validator.customerHasValidFirstName('a'.repeat(501)), false);
        });
        it('should not allow an empty string', function () {
            assert.equal(Validator.customerHasValidFirstName(''), false);
        });
        it('should allow a string of up to 500 characters', function () {
            assert.equal(Validator.customerHasValidFirstName('a'.repeat(500)), true);
        });
    });

    describe('customerHasValidLastName', function () {
        it('should not allow undefined', function () {
            assert.equal(Validator.customerHasValidLastName(), false);
        });
        it('should not allow over 500 characters', function () {
            assert.equal(Validator.customerHasValidLastName('a'.repeat(501)), false);
        });
        it('should not allow an empty string', function () {
            assert.equal(Validator.customerHasValidLastName(''), false);
        });
        it('should allow a string of up to 500 characters', function () {
            assert.equal(Validator.customerHasValidLastName('a'.repeat(500)), true);
        });
    });

    describe('customerNickNameIsBetweenThreeAndTenCharacters', function () {
        it('should not allow undefined', function () {
            assert.equal(Validator.customerNickNameIsBetweenThreeAndTenCharacters(), false);
        });
        it('should not allow less than 3 characters', function () {
            assert.equal(Validator.customerNickNameIsBetweenThreeAndTenCharacters('a'.repeat(2)), false);
        });
        it('should not allow more than 10 characters', function () {
            assert.equal(Validator.customerNickNameIsBetweenThreeAndTenCharacters('a'.repeat(11)), false);
        });
        it('should allow a string of 3 characters', function () {
            assert.equal(Validator.customerNickNameIsBetweenThreeAndTenCharacters('a'.repeat(3)), true);
        });
    });

    describe('validPass', function () {
        it('should not allow undefined', function () {
            assert.equal(Validator.validPass(), false);
        });
        it('should not allow less than 10 characters', function () {
            assert.equal(Validator.validPass('a'.repeat(9)), false);
        });
        it('should not allow more than 50 characters', function () {
            assert.equal(Validator.validPass('a'.repeat(51)), false);
        });
        it('should allow a string of up to 50 characters', function () {
            assert.equal(Validator.validPass('a'.repeat(50)), true);
        });
    });

    describe('isValidDOB', function() {
        it('should not allow undefined', function() {
            assert.equal(Validator.isValidDOB(), false);
        });
        it('should not allow a non date string', function() {
            assert.equal(Validator.isValidDOB('blah'), false);
        });
        it('should not allow a future date', function() {
            assert.equal(Validator.isValidDOB('01/01/2017'), false);
        });
        it('should not allow a date before 1900', function() {
            assert.equal(Validator.isValidDOB('12/31/1899'), false);
        });
        it('should allow a valid date', function() {
            assert.equal(Validator.isValidDOB('1/1/2000'), true);
        });
    });

    describe('isValidSelectedDate', function() {
        it('should not allow undefined', function() {
            assert.equal(Validator.isValidSelectedDate(), false);
        });
        it('should not allow a non date string', function() {
            assert.equal(Validator.isValidSelectedDate('blah'), false);
        });
        it('should not allow a date before today', function() {
            assert.equal(Validator.isValidSelectedDate('01/01/2016'), false);
        });
        it('should allow a future date', function() {
            assert.equal(Validator.isValidSelectedDate('01/01/2017'), true);
        });
    });

    describe('validCountryProvided', function() {
        it('should not allow undefined', function () {
            assert.equal(Validator.validCountryProvided(), false);
        });
        it('should not allow over 500 characters', function () {
            assert.equal(Validator.validCountryProvided('a'.repeat(501)), false);
        });
        it('should allow a string of up to 500 characters', function () {
            assert.equal(Validator.validCountryProvided('a'.repeat(500)), true);
        });
        it('should allow an empty string', function () {
            assert.equal(Validator.validCountryProvided(''), true);
        });
    });

    describe('validCustomerCity', function() {
        it('should not allow undefined', function () {
            assert.equal(Validator.validCustomerCity(), false);
        });
        it('should not allow over 500 characters', function () {
            assert.equal(Validator.validCustomerCity('a'.repeat(501)), false);
        });
        it('should allow a string of up to 500 characters', function () {
            assert.equal(Validator.validCustomerCity('a'.repeat(500)), true);
        });
        it('should allow an empty string', function () {
            assert.equal(Validator.validCustomerCity(''), true);
        });
    });

    describe('customerValidEmail', function() {
        it('should not allow an invalid email', function () {
            assert.equal(Validator.customerValidEmail('d@d'), false);
        });
        it('should allow undefined', function () {
            assert.equal(Validator.customerValidEmail(), true);
        });
        it('should allow an empty string', function () {
            assert.equal(Validator.customerValidEmail(''), true);
        });
        it('should allow a valid email', function () {
            assert.equal(Validator.customerValidEmail('d@d.com'), true);
        });
    });

    describe('customerValidPhoneNumber', function() {
        it('should not allow an invalid number', function () {
            assert.equal(Validator.customerValidPhoneNumber('ihinef[ophfafd'), false);
        });
        it('should allow undefined', function () {
            assert.equal(Validator.customerValidPhoneNumber(), true);
        });
        it('should allow an empty string', function () {
            assert.equal(Validator.customerValidPhoneNumber(''), true);
        });
        it('should allow a valid number', function () {
            assert.equal(Validator.customerValidPhoneNumber('200-02001-0'), true);
        });
    });

});
