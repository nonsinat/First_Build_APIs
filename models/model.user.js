const mongoose =require("mongoose");
const User = mongoose.Schema({
    username : {
        type: String,
    },
    dob : {
        type: String,
    },
    email : {
        type: String,
    },
    password : {
        type: String, 
    },
    address : {
        type: String,
    }, 
    dateCreated:{
        type: Date,
        default: Date.now()
    },
});


module.exports = mongoose.model("users",User);