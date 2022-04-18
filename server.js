require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require("./models/pokemon.js");
const morgan = require("morgan");
const methodOverride = require("method-override");
const res = require("express/lib/response");
const req = require("express/lib/request");

//Middleware
app.use(express.urlencoded({ extended: false }));
// express.static(public)
app.use(morgan("tiny"));
app.use(methodOverride("_method"));



// Index Route
app.get("/pokemon", (req, res) => {
  res.render("index.ejs", { pokemon: pokemon });
});



//New Route - gives us the form to use for creating new pokemon
app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs");
});


//  Delete Route
app.delete("/pokemon/:id", (req, res) => {
  const index = req.params.id;
  pokemon.splice(index, 1);
  res.redirect("/pokemon");
});



// Update Route
// app.put('/pokemon/:id', (req, res) => {

// });    



//Create route is the post route for the show route
app.post("/pokemon", (req, res) => {   
  const newPoke = {
    name: req.body.name,
    img: req.body.img,
    type: req.body.type.split(", "),
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense
    }
  
  }   
  pokemon.push(newPoke);
  res.redirect("/pokemon");
});  



//  Edit Route
app.get('/pokemon/:id/edit', (req, res) => {
  res.render("edit.ejs", {onePokemon: pokemon[req.params.id], id: req.params.id})
});        


app.put('/pokemon/:id', (req, res) => {
  const editPoke = {
    name: req.body.name,
    img: req.body.img,
    type: req.body.type.split(", "),
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense
    }
  
  }   
  
  pokemon[req.params.id] = editPoke
  res.redirect('/pokemon')
})





// Show Route
app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs", { onePokemon: pokemon[req.params.id], id: req.params.id });
});









app.listen(3000, () => {
  console.log(`Express is listening on port ${PORT}`);
});
