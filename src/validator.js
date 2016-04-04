/*
    Makes sure that the customer has a valid first name.
    Returns true if valid, false otherwise.
*/
function customerHasValidFirstName (cust) {
    return typeof cust === 'string' && cust !== '' && cust.length < 501;
}

/*
    Makes sure that the customer has a valid last name.
    Returns true if valid, false otherwise.
*/
function customerHasValidLastName (cust) {
    return typeof cust === 'string' && cust !== '' && cust.length < 501;
}

/*
    Makes sure that the customer has a valid nick name.
    Returns true if valid, false otherwise.
*/
function customerNickNameIsBetweenThreeAndTenCharacters(test) {
    return typeof test === 'string'  && test.match(/^\w{3,10}$/) !== null;
}

/*
    Checks that the password provided is valid.
*/
function ValidPass(p) {
    return typeof p === 'string' && p.match(/^.{10,50}$/) !== null;
}

/*
    Returns true if the DOB is valid.
*/
function isValidDOB(dob) {
    var d = new Date(dob);
    if (!isNaN(d)) {
        if(d.getFullYear() < 2016 && d.getFullYear() > 1900) {
            return true;
        }
    }
    return false;
}

/*
    Returns true if the date the customer selected is valid.
*/
function isValidSelectedDate(date) {
    var d = new Date(date);
    var checkD = new Date();
    if (!isNaN(d)) {
        if(d > checkD) {
            return true;
        }
    }
    return false;
}

/*
    Checks if the country is a valid string
*/
function validCountryProvided(c) {
    return typeof c === 'string' && c.length < 501;
}

function validCustomerCity(c) {
    return typeof c === 'string' && c.length < 501;
}

/*
  Checks if the email is valid if the customer added one.
  Email is optional so if they didn't it still returns true.
*/
function customerValidEmail(emailString) {
    if(emailString === undefined || emailString === '') {
        return true;
    }
    else {
        return typeof emailString === 'string' &&
        emailString.match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.([a-z]){0,3})$/) !== null;
    }
}

/*
  Checks if the phone is valid if the customer added one.
  Phone is optional like email so if they didn't it still returns true.
*/
function customerValidPhoneNumber(phoneString) {
    if(phoneString === undefined || phoneString === '') {
        return true;
    }
    else {
        return typeof phoneString === 'string' &&
        phoneString.match(/^[0-9\- ]+$/) !== null;
    }
}

/* Validates a members details */
function validateMemberDetails(fName, lName, nName, pass, dob, selectedDate, country, city, email, phoneNo) {
    var errors = [];
    if(!customerHasValidFirstName(fName)) {
        errors.push('invalid first name');
    }
    if(!customerHasValidLastName(lName)) {
        errors.push('invalid last name');
    }
    if(!customerNickNameIsBetweenThreeAndTenCharacters(nName)) {
        errors.push('invalid nick name');
    }
    if(!ValidPass(pass)) {
        errors.push('invalid password');
    }
    if(!isValidDOB(dob)) {
        errors.push('invalid date of birth');
    }
    if(!isValidSelectedDate(selectedDate)) {
        errors.push('invalid selected date');
    }
    if(!validCountryProvided(country)) {
        errors.push('invalid country name');
    }
    if(!validCustomerCity(city)) {
        errors.push('invalide city name');
    }
    if(!customerValidEmail(email)) {
        errors.push('invalid email');
    }
    if(!customerValidPhoneNumber(phoneNo)) {
        errors.push('invalid phone number');
    }
    return errors;
}


export default  {
    validateMemberDetails: validateMemberDetails,
    customerHasValidFirstName: customerHasValidFirstName,
    customerHasValidLastName: customerHasValidLastName,
    customerNickNameIsBetweenThreeAndTenCharacters: customerNickNameIsBetweenThreeAndTenCharacters,
    validPass: ValidPass,
    isValidDOB: isValidDOB,
    isValidSelectedDate: isValidSelectedDate,
    validCountryProvided: validCountryProvided,
    validCustomerCity: validCustomerCity,
    customerValidEmail: customerValidEmail,
    customerValidPhoneNumber: customerValidPhoneNumber
};
