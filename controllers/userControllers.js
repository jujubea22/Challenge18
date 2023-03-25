const { User, Thought} = require('../models');

module.exports = {
    // getting a users
    getUsers(req, res) {
        User.find({})
        .then((userData) => res.json(userData))
        .catch((err) => res.status(400).json(err));
    },

    // get users by id
    getUserWithId(req, res) {
        User.findOne(
            {_id: req.params.id}
        )
        .then((userData) => res.json(userData))
        .catch((err) => res.status(400).json(err));
    },
getUserById({ params }, res){
    
}
      // deleting a user
    deleteUser(req, res) {
        User.findOneAndDelete(
            {_id: req.params.id}
        )
        .then((userData) => res.json(userData))
        .catch((err) => res.status(400).json(err));
    },
