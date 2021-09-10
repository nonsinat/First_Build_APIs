const router = require("express").Router()
const {getAllReputation,getOneReputation,createReputation,updateReputation,deleteReputation} = require("../controller/reputation.controller");

//Get All Reputation
router.get("/",getAllReputation);

//Get One Reputation
router.get("/:id",getOneReputation);

//Create Reputation
router.post("/",createReputation);

//Update Reputation
router.put("/:id",updateReputation);

//Delete Reputation
router.delete("/:id",deleteReputation);


module.exports =router;