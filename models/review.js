const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
    Recipe_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Recipe',
    },
    comment : String,
    rating : Number,
    date: {
        type : date,
        default : Date.now()
    },
})

module.exports = mongoose.model('Review', schema);
