const User = require("../models/model.user");

//// CRUD USER

const { Mongoose } = require("mongoose");
const { create, update } = require("../models/model.user");


 async function getAllUser (req,res,next){
   
    try {
        const users= await User.find();
        res.send({
            message: " Get all User Successfully",
            payload: users,
        });
    } catch (error) {
        res.status(404).send({message : "User Not Found"});
    }

}

async function getOneUser (req,res,next){
    try {
        const user= await User.findOne({_id:req.params.id}); 
        res.send({
            message: " Get One User Successfully",
            payload: user, 
        });
    } catch (error) {
    
        res.status(404).send({message : "User Not Found"});
    }
}

async function createUser (req,res,next){
    try {
        const data = req.body;
        
        const newUser = new User({
            username: data.username,
            dob: data.dob,
            email: data.email,
            password: data.password,
            address: data.address,
            dateCreated: data.dateCreated,
        });

        const result = await User.create(newUser);
        res.send({
            message: "Created Course Successfully!",
            payload: result
        })

    } catch (error) {
    
        res.status(500).send({message : "Bad Request"});
    }
}

async function updateUser (req,res,next){
    try {
        const id = req.params.id;
        const data = req.body;
        
       
        const { doc } = await User.findByIdAndUpdate({_id:id},data);

        res.send({
            message: "Updated User Successfully!",
            payload: doc,
        })

    } catch (error) {
    
        res.status(404).send({message : "Not Found"});
    }
}

async function deleteUser (req,res,next){
    try {
        const id = req.params.id
        const { doc } = await User.findByIdAndDelete(id)
        res.send({
            message: "Delete Course successfully!",
            payload: doc
        })
        res.send("Delete User")
    } catch (err) { 
        next(new error.NotFoundError(err))
    }
}

module.exports.getAllUser = getAllUser;
module.exports.getOneUser  = getOneUser;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;