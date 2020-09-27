const mongoose = require("mongoose")

function init(){
    mongoose.createConnection(
        "mongodb+srv://admin:LaZHn7LQWrEwwgz2@cluster0.gvini.mongodb.net/lightning_bank?retryWrites=true&w=majority",
        {
            useNewUrlParser: true
        }
    ).then(()=>{
        console.log("database connected")
    })
    .catch((err)=>{
        console.log("database connection error: " + err);
    })
}

module.exports.init = init;
