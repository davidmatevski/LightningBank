const User = require("../schema/user");

async function createUser(userData) {
    console.log(userData);

    try {
        var newUser = new User({
            username: userData.username,
            firstName: userData.firstName,
            lastName: userData.lastName,
            emailAddress: userData.emailAddress,
            dob: Date.parse(userData.dob),
            phoneNumber: userData.phoneNumber,
            username: userData.username,
            password: userData.password
        });
        await newUser.save({}, (err, doc) => {
        });

        return newUser;
    } catch (err) {
        console.log("error occured while creating a user, ERROR: " + err );
        return null;
    }
}

async function updateUserName(userID ,firstName, lastName){
    try{
        var found = await User.findById(userID).exec()
        if(found) {
            var updatedUser = {...found, firstName, lastName };
            await User.updateOne({_id:userID}, updatedUser);
            return updatedUser;
        }
    } catch (err){
        console.log("error in updating User's Name");
    }
    
    return null;
}

async function updatePassword(userID, newPassword){

    try{
        var found = await User.findById(userID).exec()
        if(found) {
            var updatedUser = {...found, password: newPassword};
            await User.updateOne({_id:userID}, updatedUser);
            return updatedUser;
        }
    } catch (err){
        console.log("error in updating User's Password ERROR: " + err);
    }
    
    return null;

}

async function updatePhoneNumber(userID, newNumber){

    try{
        var found = await User.findById(userID).exec()
        if(found) {
            var updatedUser = {...found, phoneNumber: newNumber};
            await User.updateOne({_id:userID}, updatedUser);
            return updatedUser;
        }
    } catch (err){
        console.log("error in updating User's Password ERROR: " + err);
    }
    
    return null;
}

async function updateProfileImage(userID, newImage){
    try{
        var found = await User.findById(userID).exec()
        if(found) {
            var updatedUser = {...found, password: newPassword};
            await User.updateOne({_id:userID}, updatedUser);
            return updatedUser;
        }
    } catch (err){
        console.log("error in updating User's Password ERROR: " + err);
    }
    
    return null;
}

async function getUserData(username){
    try{
        return await User.findOne({username})
    }
    catch(err){
        console.log("could not find user, ERROR: " + err);
        return null;
    }
}

module.exports = {
    createUser,
    updateUserName,
    updatePassword,
    updatePhoneNumber,
    updateProfileImage,
    getUserData
}