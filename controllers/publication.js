const Pub = require('../models/publication')


const addPub =  async (req,res) =>{
    const user = req.user;
    try {
        const newPublication = new Pub({
            title: req.body.title,
            content: req.body.content,
           
        });
        await newPublication.save();
        user.pubs.push(newPublication);
        await user.save();

        res.status(201).json({
            publication: newPublication,
            message: 'Publication added successfully',
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error while adding the publication',
        });
    }
}

const getPubById =  (req,res) => {
    Pub.findOne({ _id: req.params.id })
      .then((pub) => {
        if (!pub) {
          res.status(404).json({
            message: "Publication found !!",
          });
          return;
        }
        res.status(200).json({
          model: pub,
          message: "Publication found",
        });
      })
      .catch((error) =>
        res.status(400).json({
          error: error.message,
          message: "Publication doesn't exist !!!",
        })
      );
}

const getPubandAuth = async (req, res) => {
    
}




module.exports = {
    addPub,
    getPubById,
    getPubandAuth
 }