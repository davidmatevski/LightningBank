const mongoose = require("mongoose");

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
    password:{
        type: String,
        required: true
    }
})

const Model = mongoose.model("User", UserSchema);
module.exports = Model;