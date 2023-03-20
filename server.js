/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const methodOverride = require('method-override');

/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');

/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const winesCtrl = require('./controllers/wines');
const reviewsCtrl = require('./controllers/reviews');

/* Create the Express app
--------------------------------------------------------------- */
const app = express();

/* Configure the app to refresh the browser when nodemon restarts
--------------------------------------------------------------- */
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* Middleware (app.use)
--------------------------------------------------------------- */
app.use(express.static('public'))
app.use(connectLiveReload());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('dist'));

/* Mount routes
--------------------------------------------------------------- */
app.get('/', function (req, res) {
    db.Wine.find({ isFeatured: true })
        .then(wines => {
            res.render('home', {
                wines: wines
            })
        })
    // res.send('Hello World')
});

// When a GET request is sent to `/seed`, the wines collection is seeded
app.get('/seed', function (req, res) {
    db.Wine.deleteMany({})
        .then(removedWines => {
            console.log(`Removed ${removedWines.length} wines from the database`)

            db.Wine.insertMany(db.seedWines)
                .then(addedWines => {
                    console.log(`Added ${addedWines.length} wines seeded to the database`)
                    res.json(addedWines)
                })
        })
});

app.get('/about', function (req, res) {
    res.render('about')
});


// // This tells our app to look at the controllers files to handle all routes that begin with /wines and /reviews`
app.use('/wines', winesCtrl)

app.use('/reviews', reviewsCtrl)

// // The "catch-all" route: Runs for any other URL that doesn't match the above routes
app.get('*', function (req, res) {
    res.render('404')
});

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});