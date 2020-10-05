const userService = require("./userService")
const bcrypt = require("bcryptjs");

async function authenticate(userData) {
    var user = await userService.getUserData(userData.username);
    if(!user){
        return false;
    }
    
    var match = await bcrypt.compare(userData.password, user.password);
    return match;
}

module.exports = {
    authenticate
}
