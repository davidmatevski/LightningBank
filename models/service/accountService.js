const Account = require("../schema/account");
const uuid = require("uuid").v4;

async function createAccount(userID) {

    try {
        var newAccount = new Account({
            userID,
            userFriendlyID: uuid()
        })
        await newAccount.save({}, (err, doc) => {

        });

        return newAccount;
    } catch (err) {
        console.log("Error in create account, ERROR: " + err);
    }
    return null;
}

async function updateBalance(userFriendlyID, amount){
    if (amount == 0) {
        return null;
    }

    try{
        var account = await Account.findOne({userFriendlyID}).exec()
        if(account){
            var updatedAccount = {
                ...account,
                balance: account.balance + amount
            }

            await Account.updateOne({userFriendlyID}, updatedAccount).exec();
            return updatedAccount;
        }
    }
    catch(err){
        console.log("error updating user balance, ERROR: " + err);
    }
    return null;
}

async function updateLoanBalance(amount){

    try{
        var account = await Account.findOne({userFriendlyID}).exec()
        if(account){
            var updatedAccount = {
                ...account,
                loanBalance: account.loanBalance + amount
            }

            await Account.updateOne({userFriendlyID}, updatedAccount).exec();
            return updatedAccount;
        }
    }
    catch(err){
        console.log("error updating user loan balance, ERROR: " + err);
    }
    return null;

}

async function getAccountsByUserID(userID){
    try{
        return await Account.find({userID}).exec();
    }
    catch(err){
        console.log("could not find accoun(s) by userID, ERROR: " + err);
        return [];
    }
}

module.exports = {
    updateLoanBalance,
    updateBalance,
    createAccount,
    getAccountsByUserID
}