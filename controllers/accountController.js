const express = require("express");
const userService = require("../models/service/userService");
const accountService = require("../models/service/accountService");
const router = express.Router();

// GET /account/login
// router.get("/login",(req,res)=>{
//     res.render()
// })

// GET /account/login
router.get("/register", (req,res)=>{
    res.render("register");
});

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        res.redirect("/");
    })
});

// POST /account/login
router.post("/login", (req,res)=>{

})

// POST /account/register
router.post("/register", async (req,res)=>{
   var newUser = await userService.createUser(req.body);
    if (newUser) {
        var newAccount = await accountService.createAccount(newUser._id);
        if (newAccount) {
            req.session.user = newUser;

            res.redirect("/");
            return;
        }
    }
        res.render("register", {
            error: "Registration Failed"
        });
})


module.exports = router;
