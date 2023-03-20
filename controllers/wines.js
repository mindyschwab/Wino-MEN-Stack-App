/* 
---------------------------------------------------------------------------------------
all routes on this page are prefixed with `localhost:3000/wines`
---------------------------------------------------------------------------------------
*/

/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const { seedWines } = require('../models')
const router = express.Router()

/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')

/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all wines documents
router.get('/', function (req, res) {
    db.Wine.find({})
        .then(wines => {
            res.render('wines/wine-index', {
                wines: wines
            })
        })
})

// New Route (GET/Read): This route renders a form which the user will fill out to POST (create) a new location
router.get('/new', (req, res) => {
    res.render('wines/new-wine-form')
})

// // Create Route (POST/Create): This route receives the POST request sent from the new route, creates a new wine document using the form data, 
// // and redirects the user to the new wine's show page
router.post('/', (req, res) => {
    db.Wine.create(req.body)
        .then(wine => {
            res.redirect(`/wines/${wine._id}`)
        })
})

// // Edit Route (GET/Read): This route renders a form the user will use to PUT (edit) properties of an existing wine
router.get('/:id/edit', (req, res) => {
    db.Wine.findById(req.params.id)
        .then(wine => {
            res.render('wines/edit-wine-form', {
                wine: wine
            })
        })
})

// // Update Route (PUT/Update): This route receives the PUT request sent from the edit route, edits the specified wine document using the form data,
// // and redirects the user back to the show page for the updated location.
router.put('/:id', (req, res) => {
    db.Wine.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(wine => res.redirect(`/wines/${wine._id}`))
})

// // Destroy Route (DELETE/Delete): This route deletes a wine document  using the URL parameter (which will always be the wine document's ID)
router.delete('/:id', (req, res) => {
    db.Wine.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/wines'))
})


// // Show Route (GET/Read): Will display an individual wine's document using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    db.Wine.findById(req.params.id)
        .then(wine => {
            res.render('wines/wine-details', {
                wine: wine
            })
        })
        .catch(() => res.send('404 Error: Page Not Found'))
})

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router