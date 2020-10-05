const express = require("express");
const router = express.Router();
const {
    ensureLoggedIn
} = require("../middlewares/authentication");
const accountService = require("../models/service/accountService");

// GET /transaction
router.get("/", ensureLoggedIn, async (req, res) => {
    var accounts = await accountService.getAccountsByUserID(req.session.user._id);

    res.render("transaction", {
        balance: accounts[0].balance,
        loanBalance: accounts[0].loanBalance,
        userFriendlyID: accounts[0].userFriendlyID
    });
})

// GET /transaction/history
router.get("/history", ensureLoggedIn, (req, res) => {

})

// POST /transaction/deposit
router.post("/deposit", ensureLoggedIn, async (req, res) => {
    try {
        var account = await accountService.updateBalance(req.body.accountID, req.body.amount);
        if (account) {
            res.status(200).json({
                message: `Successfully deposited $${req.body.amount}`
            });
        } else {
            res.status(500).json({
                message: `Deposit Failure`
            });
        }
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
})

// POST /transaction/withdraw
router.post("/withdraw", ensureLoggedIn, async (req, res) => {
    try {
        var account = await accountService.updateBalance(req.body.accountID, -req.body.amount);
        if (account) {
            res.status(200).json({
                message: `Successfully withdrew $${req.body.amount}`
            });
        } else {
            res.status(500).json({
                message: `Withdrawal Failure`
            });
        }
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
})
// POST /transaction/payment
router.post("/payment", ensureLoggedIn, async (req, res) => {
    try {
        var account = await accountService.updateLoanBalance(req.body.accountID, -req.body.amount);
        if (account) {
            res.status(200).json({
                message: `Successful payment of $${req.body.amount}`
            });
        } else {
            res.status(500).json({
                message: `Payment Failure`
            });
        }
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
})

// POST /transaction/lending
router.post("/lending", ensureLoggedIn, async (req, res) => {
    try {
        var account = await accountService.updateLoanBalance(req.body.accountID, req.body.amount);
        if (account) {
            res.status(200).json({
                message: `Successful Loan of $${req.body.amount}`
            });
        } else {
            res.status(500).json({
                message: `Loan Failure`
            });
        }
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
})

//DELETE /transaction/history
router.delete("/history", ensureLoggedIn, (req, res) => {

})

//DELETE /transaction/history/:id
router.delete("/history/:id", ensureLoggedIn, (req, res) => {

})



module.exports = router;