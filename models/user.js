const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
{
    username:{
        type: String,
        required: true,
        trim: true
        },
    email: {
        type: String,
        required: true,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address."],
        },
})
userSchema.virtual("friendCount").get(function() {
    return this.friends.length;
})

const User = model("User", userSchema);

module.exports = User;
