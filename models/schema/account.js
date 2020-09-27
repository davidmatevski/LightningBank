const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({

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