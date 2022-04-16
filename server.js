const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Pokemon = require('./models/pokemon.js');
const morgan = require('morgan');
const methodOverride = require('method-override');
require("dotenv").config()


//Middleware
app.use(express.urlencoded({extended: false}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));





app.get('/', (req, res) => {
    res.send('You are home!');
});


// Index Route

app.get('/pokemon', (req, res) => {         //ex: app.get('/fruits/', (req, res) => {
    res.render('index.ejs', { data: Pokemon });                                    //ex: res.send(fruits);
});


// Show Route

// app.get('/pokemon/:id', (req, res) => {         //app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//     res.render('show.ejs', { data: Pokemon[req.params.id] })
// });



// New Route
// app.get('/pokemon/new', (req, res) => {

// });




//  Edit Route
// app.get('/pokemon/:id/edit', (req, res) => {

// });


// // Create Route
// app.post('/pokemon', (req, res) => {

// });


// // Update Route
// app.put('/pokemon/:id', (req, res) => {

// });



// // Delete Route
// app.delete('pokemon/:id', (req, res) => {

// });







app.listen(3000, () => {
    console.log(`Express is listening on port ${PORT}`)
});