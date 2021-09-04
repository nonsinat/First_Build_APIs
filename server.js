const express = require("express");
const cors =  require("cors");
const db =  require("./db");
const userRouter=  require("./route/user.route");

db;


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/users",userRouter);



app.listen(process.env.PORT || 3000,()=>console.log("Server is running port 3000"));


