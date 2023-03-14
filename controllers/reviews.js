/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/reviews`
---------------------------------------------------------------------------------------
*/

/* Require modules
--------------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()

/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')
const wines = require('../models/seed')
// const reviewSchema = require('../models/review')

/* Routes
--------------------------------------------------------------- */
// New Route: GET localhost:3000/reviews/new
router.get('/new/:wineId', (req, res) => {
    db.Wine.findById(req.params.wineId)
        .then(wine => {
            res.render('reviews/new-review-form', { wine: wine })
        })
    // res.send('You\'ve reached the new route. You\'ll be making a new review for wine ' + req.params.wineId)
})

// Create Route: POST localhost:3000/reviews/
router.post('/create/:wineId', (req, res) => {
    db.Wine.findByIdAndUpdate(
        req.params.wineId,
        { $push: { reviews: req.body } },
        { new: true }
    )
        // then redirect to the wines's show page 
        .then(wines => {
            res.redirect(`/wines/${wines._id}`)
        })
    // res.send('this is the review create route')
});

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
