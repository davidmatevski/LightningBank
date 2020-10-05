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

async function updateBalance(userFriendlyID, amount) {
    if (amount == 0) {
        return null;
    }

    var errorMessage;

    try {
        var account = await Account.findOne({
            userFriendlyID
        }).exec()
        if (account) {
            var newBalance = account.balance + amount;
            if (newBalance < 0) {
                errorMessage = "Not enough balance";
            } else {
                var updatedAccount = {
                    // ...account,
                    balance: newBalance
                }

                await Account.updateOne({
                    userFriendlyID
                }, updatedAccount).exec();
                return updatedAccount;
            }
        }
    } catch (err) {
        console.log("error updating user balance, ERROR: " + err);
    }

    if (errorMessage) {
        throw errorMessage;
    }

    return null;
}

async function updateLoanBalance(userFriendlyID, amount) {

    var errorMessage;

    try {
        var account = await Account.findOne({
            userFriendlyID
        }).exec()
        if (account) {
            var absAmount = Math.abs(amount);
            if (amount < 0 && account.balance < absAmount) {
                errorMessage = "Insufficient balance";
                return;
            }

            var newBalance = account.loanBalance + amount;
            var paymentAmount = absAmount;
            if (newBalance < 0) {
                paymentAmount = absAmount - Math.abs(newBalance);
                newBalance = 0;
            }
            var updatedAccount = {
                loanBalance: newBalance
            }

            if (amount < 0) {
                updatedAccount.balance = account.balance - paymentAmount;
            }

            await Account.updateOne({
                userFriendlyID
            }, updatedAccount).exec();
            return updatedAccount;

        }
    } catch (err) {
        console.log("error updating user loan balance, ERROR: " + err);
    }

    if (errorMessage) {
        throw errorMessage;
    }

    return null;

}

async function getAccountsByUserID(userID) {
    try {
        return await Account.find({
            userID
        }).exec();
    } catch (err) {
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