"use strict";

var express = require('express');
var mongoose = require("mongoose");
var dotenv = require('dotenv');
var categorieRouter = require("./routes/categorie.route");
var scategorieRouter = require("./routes/scategorie.route");
var articleRouter = require("./routes/article.route");
dotenv.config();
var app = express();
//BodyParser Middleware
app.use(express.json());
mongoose.set("strictQuery", false);
// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("Connexion à la base de données réussie");
})["catch"](function (err) {
  console.log('Impossible de se connecter à la base de données', err);
  process.exit();
});
app.get("/", function (req, res) {
  res.send("bonjour");
  // pour changer il faut faire nodemon dans le terminal//
  /*app.get("/contact",(req,res)=>{
  res.send("page de contact");*/
});

app.use('/api/categorie', categorieRouter);
app.use('/api/scategorie', scategorieRouter);
app.use('/api/articles', articleRouter);
app.listen(process.env.PORT, function () {
  console.log("Server is listening on port ".concat(process.env.PORT));
});
