const express = require("express");
const router = express.Router();

// GET /transaction
router.get("/", (req,res)=>{
    res.render("transaction")
})

// GET /transaction/history
router.get("/history", (req,res)=>{

})

// POST /transaction/deposit
router.post("/deposit", (req,res)=>{

})

// POST /transaction/withdraw
router.post("/withdraw", (req,res)=>{

})
// POST /transaction/payment
router.post("/payment", (req,res)=>{

})

// POST /transaction/lending
router.post("/lending", (req,res)=>{

})

//DELETE /transaction/history
router.delete("/history", (req,res)=>{

})

//DELETE /transaction/history/:id
router.delete("/history/:id", (req,res)=>{

})



module.exports = router;