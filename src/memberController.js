import MemberAlertService from './memberAlertService';
import DatabaseService from './databaseService';
import Validator from './validator';

// This takes some form data validates it, throws an error if it doesn't work
// saves the details in the database and returns a message
class MemberController {

    constructor() {
        this.memberAlertService = new MemberAlertService();
        this.databaseService = new DatabaseService();
        this.validator = new Validator();
    }

    submitMember(form) {

        // Check the form for any errors
        var errors = this.validator.validateMemberDetails(
            form.firstName, form.lastName, form.nickName, form.password,
            form.birthdate, form.selectedDate, form.country, form.city,
            form.email, form.phoneNumber
        );

        if(errors.length > 0) {
            // Prepare the error message for the user
            var message = 'There were errors on the form:\n' +
                errors.concat(', ');

            //Get the alert service to tell the user of the problem
            this.memberAlertService.clearCurrentMessage();
            this.memberAlertService.errorMessage = message;
            this.memberAlertService.notifyUser();
            return false;
        }
        else {
            // There weren't any errors so we need to save the entry
            this.databaseService.startConnection();
            if (this.databaseService.save('membersTable',
                [form.firstName, form.lastName, form.nickName, form.password,
                form.birthdate, form.selectedDate, form.country, form.city,
                form.email, form.phoneNumber])) {
                    // Success so just update the user
                    this.memberAlertService.clearCurrentMessage();
                    this.memberAlertService.successMessage = 'Thanks for registering!';
                    this.memberAlertService.notifyUser();
                    return true;

                } else {
                    // There was a problem saving to the database so we need to tell the user as well
                    // Prepare the error message for the user
                    var errorMessage = 'There was a problem saving the user. Please try again or contact us for support';

                    //Get the alert service to tell the user of the problem
                    this.memberAlertService.clearCurrentMessage();
                    this.memberAlertService.errorMessage = errorMessage;
                    this.memberAlertService.notifyUser();
                    return false;
                }
        }
    }
}
export default MemberController;
