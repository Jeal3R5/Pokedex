require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require('./models/pokemon.js');
const morgan = require('morgan');
const methodOverride = require('method-override');
const res = require("express/lib/response");
const req = require("express/lib/request");


//Middleware
app.use(express.urlencoded({extended: false}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));



// Index Route

app.get('/pokemon/', (req, res) => {         
    res.render('index.ejs', { pokemon: pokemon });                           
});



//New Route
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
 });

// Show Route

app.get('/pokemon/:id', (req, res) => {       
    res.render('show.ejs', { onePokemon: pokemon[req.params.id] });
});



//  Edit Route
// app.get('/pokemon/:id/edit', (req, res) => {

// });


// // Create Route
app.post('/pokemon', (req, res) => {
pokemon.push(req.body);
res.redirect('/pokemon')
});


// // Update Route
// app.put('/pokemon/:id', (req, res) => {

// });



// // Delete Route
// app.delete('pokemon/:id', (req, res) => {

// });







app.listen(3000, () => {
    console.log(`Express is listening on port ${PORT}`)
});