var mongoose = require('mongoose');

const Bookschema = mongoose.Schema({
    title: String,
    author: String,
    description: String,
    genre:{
        type:String
    },
    creatdate:{
        type:Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('Books', Bookschema);
