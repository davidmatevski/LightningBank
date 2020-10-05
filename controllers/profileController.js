const express = require("express");
const router = express.Router();
const { ensureLoggedIn } = require("../middlewares/authentication")

// GET /profile
router.get("/", ensureLoggedIn, (req,res)=>{

})

// PUT /profile?type=name
// type: name, email, dob, password, phone
router.put("/", ensureLoggedIn, (req,res)=>{

})

// PUT /profile/image
router.put("/image", ensureLoggedIn, (req,res)=>{
    
})




module.exports = router;