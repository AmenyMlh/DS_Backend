const User = require('../models/user')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

exports.register = (req,res,next) => {
   const author = new User({
       nom: req.body.nom,
       prenom : req.body.prenom,
       telephone : req.body.telephone,
       login: req.body.login,
       role : "author"
   })
   author.save()
   .then((response) => {
       const newAuthor = response.toObject()
       res.status(201).json({
           model: newAuthor,
           message: "Author created",
       })
   })
   .catch((error) => res.status(400).json({error : error.message}))
  }

exports.signin = (req,res,next) => {
   User.findOne({ login: req.body.login})
   .then((user) => {
       if(!user){
           return res.status(401).json({message: "Incorrect Login or Password"})
       }
       bcrypt
       .compare(req.body.password, user.password).then((valid) => {
       if (!valid){
           return res.status(401).json({message: "Incorrect Login or Password"})
       }
       res.status(200).json({
           token : jwt.sign({userId: user._id}, "RANDOM_TOKEN_SECRET",{expiresIn: "24h"}),message: "Welcome"

       })
       })
       .catch((error) => res.status(500).json({error: error.message}))
   })
   
}

exports.addAdmin = (req,res,next) =>{
  bcrypt
  .hash(req.body.password, 10)
  .then((hash) => {
    const newAdmin = new User({
      nom: req.body.nom,
      prenom: req.body.prenom,
      telephone: req.body.telephone,
      login : req.body.login,
      password: hash,
      role : req.body.role,
      statut : "V",
      });
    
      newAdmin.save()
      .then((response) => {
          const newAdmin = response.toObject()
          delete newAdmin.password
          res.status(201).json({
              model: newAdmin,
              message: "Admin added",
          })
      })
      .catch((error) => res.status(400).json({error : error.message}))
     })
     .catch((error) => res.status(500).json({error : error.message}))
   }

  

   exports.addAuthor = (req,res,next) =>{
    let newUser = new User({
      nom: req.body.nom,
      prenom: req.body.prenom,
      telephone: hash,
      login : req.body.login,
      role : req.body.role,
      statut : req.body.statut,
      approved: false, 
    });
  
    newUser
      .save(newUser)
      .then(() =>
        res.status(201).json({
          model: newUser,
          message: "Author added ! Waiting for admin approval.",
        })
      )
      .catch((error) =>
        res.status(400).json({
          error: error.message,
          message: "Invalid data !!!",
        })
      );
     }
     exports.addAuthor = (req,res,next) =>{
     }