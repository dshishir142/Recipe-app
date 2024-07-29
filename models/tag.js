const mongoose = require('mongoose');

const schema = mongoose.Schema({
    tag : String,
})

module.exports = mongoose.model('Tag', schema);

