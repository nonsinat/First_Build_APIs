const config = require("./config.json");
const mongoose = require("mongoose");

const db =mongoose.connect(config.DB_URL,{
    // userCreateIndex:true,
    // userFindAndMotify: true,
    // userUnifiedTopology:true,
    // userNewUrlParser: true, 
},(err)=>{
    if (err) return console.log(err);
    console.log("DB Connected");
    
});
 
module.exports =db;