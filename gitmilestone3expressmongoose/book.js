"use strict";
var mongoosee = require('mongoose');
var bookSchema = new mongoosee.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    rating: {
        type: String
    },
    pages: {
        type: String
    }
});
module.exports = mongoosee.model('book', bookSchema);
