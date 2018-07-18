const mongoose = require('mongoose');

var Book = mongoose.model('Book', {
    bookNo:{type:Number},
    bookName: { type: String },
    Author: { type: String },
    
});

module.exports = { Book };