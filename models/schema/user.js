const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({

    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    emailAddress:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: false
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    profilePicture:{
        type: String,
        required: false
    },
    dateRegistered:{
        type: Date,
        required: true,
        default: Date.now
    }
});

UserSchema.pre("save", async function () {
    try {
        var salt = await bcrypt.genSalt(saltRounds);
        var newPassword = await bcrypt.hash(this.password, salt);

        this.password = newPassword;
    }
    catch (err) {
        console.log(err);
    }
});

const Model = mongoose.model("User", UserSchema);
module.exports = Model;