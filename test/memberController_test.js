import DatabaseService from '../src/databaseService';
import Validator from '../src/validator';
import MemberController from '../src/memberController';
import assert from 'assert';

describe('MemberController', function() {


    it('should return true if there are no errors and it saves', function() {
        Validator.validateMemberDetails = function() { return []; };
        DatabaseService.prototype.save = function() { return true; };

        var result = new MemberController().submitMember({});
        assert.equal(result, true);
    });

    it('should return false if there are validation errors', function() {
        Validator.validateMemberDetails = function() { return ['error']; };

        var result = new MemberController().submitMember({});
        assert.equal(result, false);
    });

    it('should return false if there is a save error', function() {
        Validator.validateMemberDetails = function() { return []; };
        DatabaseService.prototype.save = function() { return false; };

        var result = new MemberController().submitMember({});
        assert.equal(result, false);
    });

});
