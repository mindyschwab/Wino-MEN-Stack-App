/* 
---------------------------------------------------------------------------------------
all routes on this page are prefixed with `localhost:3000/wines`
---------------------------------------------------------------------------------------
*/

/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const { seedWines } = require('../models')
// Router allows us to handle routing outisde of server.js
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
            // res.render('wine-index', {
            //     wines: wines
            // })
            res.send('Wines Index Page')
        })
})

// New Route (GET/Read): This route renders a form 
// which the user will fill out to POST (create) a new location
router.get('/new', (req, res) => {
    // res.render('new-form')
    res.send('Wines New Page')
})

// // Create Route (POST/Create): This route receives the POST request sent from the new route,
// // creates a new wine document using the form data, 
// // and redirects the user to the new wine's show page
router.post('/', (req, res) => {
    db.Wine.create(req.body)
    // .then(wine => {
    //     res.redirect(`/wines/${wine._id}`)
    // })
    res.send('Wines Create Route- will redirect to show page')
})

// // Edit Route (GET/Read): This route renders a form
// // the user will use to PUT (edit) properties of an existing wine
router.get('/:id/edit', (req, res) => {
    db.Wine.findById(req.params.id)
    // .then(wine => {
    //     res.render('edit-form', {
    //         wine: wine
    //     })
    // })
    res.send('Wines Edit Route- will render edit form. Wine ID: ' + req.params.id)
})

// // Update Route (PUT/Update): This route receives the PUT request sent from the edit route, 
// // edits the specified wine document using the form data,
// // and redirects the user back to the show page for the updated location.
router.put('/:id', (req, res) => {
    // db.Wine.findByIdAndUpdate(
    //     req.params.id,
    //     req.body,
    //     { new: true }
    // )
    //     .then(wine => res.redirect(`/wines/${wine._id}`))
    res.send('Wines Update Route- will send put request from edit form. Redirects to show page. Wine ID: ' + req.params.id)
})

// // Create a purchase button on the show page of each wine.When pressed, it will decrement the quantity of the wine in the database.
// //     HINT: Browse the MongoDB and Mongo documentation.What atomic operator could be useful for this
// router.put('/:id/purchase', (req, res) => {
//     console.log(req.params.id)
//     db.Product.findByIdAndUpdate(
//         req.params.id,
//         req.body = { $inc: { quantity: -1 } },
//         { new: true }
//     )
//         .then(product => res.redirect(`/products/${product._id}`))
//     // .then(product => console.log(product.quantity))
// })

// // Destroy Route (DELETE/Delete): This route deletes a wine document 
// // using the URL parameter (which will always be the wine document's ID)
router.delete('/:id', (req, res) => {
    // db.Wine.findByIdAndRemove(req.params.id)
    //     .then(() => res.redirect('/wines'))
    res.send('Wines Delete Route- will send delete request from show page. Redirects to inde page. Wine ID: ' + req.params.id)
})


// // Show Route (GET/Read): Will display an individual wine's document
// // using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    db.Wine.findById(req.params.id)
    // .then(wine => {
    //     res.render('wine-details', {
    //         wine: wine
    //     })
    // })
    // .catch(() => res.send('404 Error: Page Not Found'))
    res.send('Wines Show Route- Wine ID: ' + req.params.id)
})

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router