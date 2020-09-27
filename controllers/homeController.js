const express = require("express");
const router = express.Router();


// GET /home
router.get("/home", (req,res)=>{
    console.log("home")
    res.render("index");
})

// GET /about
router.get("/about", (req,res)=>{
    res.render("about")
})

// GET /lending
router.get("/lending", (req,res)=>{

})

module.exports = router;