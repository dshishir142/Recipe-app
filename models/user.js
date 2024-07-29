const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        unique : true
    },
    password : String,
    profile: String,
    bio : String,
    links : {
        facebook : String,
        instagram : String,
    },
    followers : {
        type: Number,
        default : 0,
    },
    following : {
        type : Number,
        default : 0
    },
    favourites : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Recipe',
    }],
    recipes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Recipe',
    }],

});

module.exports = mongoose.model('User', schema);