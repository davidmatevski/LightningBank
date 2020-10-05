const mongoose = require("mongoose")

function init(){
    mongoose.connect(
        "mongodb+srv://admin:LaZHn7LQWrEwwgz2@cluster0.gvini.mongodb.net/main?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            promiseLibrary: Promise
        }
    ).then(()=>{
        console.log("database connected")
    })
    .catch((err)=>{
        console.log("database connection error: " + err);
    })
}

module.exports.init = init;
