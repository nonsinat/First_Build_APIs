const Reputation = require("../models/model.reputation");

/// CRUD Reputation

const {
    Mongoose
} = require("mongoose");

/** Get All Reputations */
async function getAllReputation(req, res, next) {
    try {
        const reputations = await Reputation.find();
        res.send({
            message: "Get All Reputation is Successfully",
            reputations,
        });
    } catch (error) {
        res.status(404).send({
            message: "User Not Found"
        });
    }
}

/** Get One Reputation */
async function getOneReputation(req, res, next) {
    try {
        const reputation = await Reputation.findOne({
            _id: req.params.id
        });
        res.send({
            message: "Get One Reputation is Successfully",
            reputation,
        });
    } catch (error) {
        res.status(404).send({
            message: "Reputation Not Found"
        });
    }
}

/** Create Reputation */
async function createReputation(req, res, next) {
    try {
        const data = req.body;
        const newReputation = new Reputation({
            title: data.title,
            dateJoin: data.dateJoin,
            profileUrl: data.profileUrl,    
            moreinf : data.moreinf,

        });
        const result = await Reputation.create(newReputation);
        res.send({
            message: "Create Reputation is Successfully",
            result,
        });

    } catch (error) {
        res.status(500).send({
            message: "Bad Request"
        });
    }
}

//** Update Reputation */
async function updateReputation(req, res, next) {
    const id = req.params.id;
    const data = req.body;

    try {
        const {
            doc
        } = await Reputation.findByIdAndUpdate({
            _id: id
        }, data);
        res.send({
            message: "Updated User Successfully",
            doc,
        });
    } catch (error) {
        res.status(404).send({
            message: "Not Found"
        });
    }
}

//** Delete Reputation */
async function deleteReputation(req, res, nexx) {
    const id = req.params.id;
    const {
        doc
    } = await Reputation.findByIdAndDelete(id)

    try {
        res.send({
            message: "Delete Reputation Successfully",
            doc,
        });
        res.send("Delete User");
    } catch (error) {
        next(new error.NotFoundError(err))
    }


}

module.exports.getAllReputation = getAllReputation;
module.exports.getOneReputation = getOneReputation;
module.exports.createReputation = createReputation;
module.exports.updateReputation = updateReputation;
module.exports.deleteReputation = deleteReputation;