const mongoose = require("mongoose");
const Reputation = mongoose.Schema({
    title: {
        type: String,
    },
    dateJoin: {
        type: Date,
        default: Date.now(),
    },
    profileUrl: {
        type: String,
    },
    moreinf: [{
        age: {
            type: Number
        },
        address: {
            type: String,
        },
        dob: {
            type: String,
        },
    }]

});

module.exports = mongoose.model("reputatoin", Reputation);