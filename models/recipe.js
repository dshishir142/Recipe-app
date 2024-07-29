const mongoose = require ('mongoose');

const schema = new mongoose.Schema({
    title : String,
    description : String,
    imageName : String,
    imagePath : String,
    imageType : String,
    imageSize : String,
    nutrition : [{
        type : String,
    }],
    ingredients : [{
        type : String,
    }],
    procedure : String,
    tags : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Tag',
    }],
    reviews : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Review',
    }],
    total_reviews : {
        type : Number,
        default : 0,
    },
    total_star_count : {
        type: Number,
        default : 0,
    },
    user_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
    date: {
        type : Date,
        default : Date.now()
    },
})

module.exports = mongoose.model('Recipe', schema);