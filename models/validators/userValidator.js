
function validateUser(userData, err) {

    if(!/^[a-zA-Z]{1,11}$/.test(userData.fname)) {
        err.push({
            name: "fname", 
            message: "first name could only contain letters"
        });
    }

    if(!/^[a-zA-Z]{1,20}$/.test(userData.lname)) {
        err.push({
            name: "lname",
            message: "last name could only contain letters"
        });
    }

    if(!/^[0-9]{1,30}$/.test(userData.phoneNumber)) {
        err.push({
            name: "phoneNumber",
            message: "invalid phone number"
        });
    }

    if(!/^[a-zA-Z0-9]{5,15}$/.test(userData.username)) {
        err.push({
            name: "username",
            message: "usernames could only contain letters and numbers, 5-15 characters long"
        });
    }

    if(userData.password != userData.confirmPassword){
        err.push({
            name: "confirmPassword",
            message: "passwords do not match!"
        });
    }

    return err.length == 0;
}

module.exports = {
    validateUser
}