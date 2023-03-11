// Require the Mongoose package
const mongoose = require('mongoose');
const reviewSchema = require('./review.js')

const wineSchema = new mongoose.Schema({
    style: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: Number, min: 1900, max: 2023, required: true },
    region: { type: String, required: true },
    producer: { type: String, required: true },
    abv: { type: Number, min: 0, max: 100, required: true },
    description: { type: String, required: true },
    averageRating: { type: Number, min: 0, max: 5, required: true },
    photo: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    // the applications array can only accept objects that match the criteria specified
    // in the applicationSchema. In other words, the applications array can only accept applications
    reviews: [reviewSchema]
});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Wine', wineSchema);