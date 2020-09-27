const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({

    accountID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    amount:{
        type: Number,
        required: true,
    },
    transactionType:{
        type: String,
        required: true
    },
    transactionDate:{
        type: Date,
        default: Date.now
    }


})

const Model = mongoose.model("Transaction", TransactionSchema);
module.exports = Model;