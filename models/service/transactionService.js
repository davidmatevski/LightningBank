const Transaction = require("../schema/transaction");

const TransactionTypes = {
    deposit: "deposit",
    withdraw: "withdraw",
    payment: "payment",
    loan: "loan",
    transfer: "transfer"
}

async function logTransaction(accountID, transactionType, amount) {

    try {
        var newTransaction = new Transaction({
            accountID,
            transactionType,
            amount
        });

        await newTransaction.save({}, (err, doc) => {

        });
    } catch (err) {
        console.log("error logging transaction, ERROR: " + err);
    }
}

async function getTransactionHistory(accountID){

    try{
        return await Transaction.find({accountID}).exec()
    }
    catch(err){
        console.log("error returning transaction history, ERROR: " + err)
        return [];
    }
}

module.exports = {
    getTransactionHistory,
    logTransaction
}