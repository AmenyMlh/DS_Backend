var mongoose = require('mongoose');
const {Schema} = mongoose;

var userSchema = mongoose.Schema({
    nom : {type : String,required : true},
    prenom : {type : String,required : true},
    telephone : {type : String,required : true},  
    login : {type: String, required: true, unique : true},
    password: {type : String},
    role: {
        type: String,
        enum: ['admin', 'author'], default: 'author' },
    statut : 
        {type: String,
            enum: ['EA', 'V'], default: 'EA' },
    pubs : [{
        type: Schema.Types.ObjectId,
        ref: 'Publication'
      }]
})

module.exports = mongoose.model('User', userSchema);