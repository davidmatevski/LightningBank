const express = require("express");
const userService = require("../models/service/userService");
const accountService = require("../models/service/accountService");
const authService = require("../models/service/authenticationService")
const { ensureLoggedIn, ensureLogOut } = require("../middlewares/authentication");
const router = express.Router();

// GET /account/login
// router.get("/login",(req,res)=>{
//     res.render()
// })

// GET /account/login
router.get("/register", ensureLogOut, (req, res) => {
    res.render("register");
});

router.get("/logout", ensureLoggedIn, (req, res) => {
    req.session.destroy((err) => {
        res.redirect("/");
    })
});

// POST /account/login
router.post("/login", ensureLogOut, async (req, res) => {
    if (await authService.authenticate(req.body)) {
        req.session.user = await userService.getUserData(req.body.username);
        res.status(200).json({message: "Login Success"});
    } else {
        res.status(400).json({message: "Username or Password incorrect!"});
    }
})

// POST /account/register
router.post("/register", ensureLogOut ,async (req, res) => {
    try {
        var newUser = await userService.createUser(req.body);
        if (newUser) {
            var newAccount = await accountService.createAccount(newUser._id);
            if (newAccount) {
                req.session.user = newUser;

                res.redirect("/");
                return;
            }
        }
    } catch (validationErrors) {
        res.render("register", {
            errors: validationErrors
        });
        return;
    }

    res.render("register", {
        errors: [{
            name: "general",
            message: "Registration Failure"
        }]
    });
})


module.exports = router;