const mongoose = require("mongoose")
require('dotenv').config();

function init(){
    mongoose.connect(
        process.env.DB_KEY,
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
