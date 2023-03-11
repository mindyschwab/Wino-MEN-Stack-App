const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    reviewerName: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = reviewSchema;