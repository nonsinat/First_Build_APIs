  
const router = require("express").Router()
const {getAllUser,getOneUser,createUser,updateUser,deleteUser} = require("../controller/user.controller");


//Get all user
router.get("/",getAllUser);

// Get one user
router.get("/:id",getOneUser);

// Create user
router.post("/",createUser);

// Update user
router.put("/:id",updateUser);

//Delete User
router.delete("/:id",deleteUser);


module.exports = router;