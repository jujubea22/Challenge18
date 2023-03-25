const {Thought, User} = require('../models');

module.exports = {
    // git thoughts
    getThoughts(req, res) {
        Thought.find({})
        .then((thoughtData) => res.json(thoughtData))
        .catch((err) => res.status(400).json(err));
    },

    // git by id
    getThoughtWithId(req, res) {
        Thought.findOne(
            {_id: req.params.id}
        )
        .then((thoughtData) => res.json(thoughtData))
        .catch((err) => res.status(400).json(err));
    },
       // creating thoughts
    createThought(req, res) {
        Thought.create(
            req.body
        )
        .then(({_id}) => {
            return User.findOneAndUpdate(
                {_id: req.params.userId},
                {$push: {thoughts: _id}},
                {new: true}
            );
        })
        .then((thoughtData) => res.json(thoughtData))
        .catch((err) => res.status(400).json(err));
    },

deleteThoughts({params}, res){
    Thgouths.findOneDelete({ id: params.thoughtsId})
    .then (deletedThoughts =>)
}

module.exports = thoughtControllers;
