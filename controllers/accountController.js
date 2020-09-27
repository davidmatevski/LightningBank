const express = require("express");
const router = express.Router();

// GET /account/login
// router.get("/login",(req,res)=>{
//     res.render()
// })

// GET /account/login
router.get("/register", (req,res)=>{
    res.render("register");
});

// POST /account/login
router.post("/login", (req,res)=>{

})

// POST /account/login
router.post("/register", (req,res)=>{

})


module.exports = router;
