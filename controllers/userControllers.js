const { User, Thought} = require('../models');

const userController = {
    getAllUsers(req, res){
        User.find({})
        .populate({
            path: 'thoughts'
        })
        
    }
}

getUserById({ params }, res){
    
}