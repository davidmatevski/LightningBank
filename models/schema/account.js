const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({

    userID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    balance: {
        type: Number,
        default: 0
    },
    loanBalance: {
        type: Number,
        default: 0
    },
    userFriendlyID: {
        type: String,
        required: true
    }

})

const Model = mongoose.model("Account", AccountSchema);
module.exports = Model;