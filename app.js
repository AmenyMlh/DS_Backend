const mongoose = require("mongoose");
const express = require("express");
const userRoutes = require('./routes/user')
const pubRoutes = require('./routes/publication')


const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/BD_DS")
  .then(() => console.log("Connexion a MongoDb réussie !!"))
  .catch(() => console.log("Connexion a MongoDB échouée !!!!!!"));



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content,Accept,Content-Type,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT,DELETE,PATCH,OPTIONS"
  );
  next();
});

app.use('/api',userRoutes)
app.use('/api/pub',pubRoutes)



module.exports = app;
