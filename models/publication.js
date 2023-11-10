const mongoose = require("mongoose")

const publicationSchema = mongoose.Schema({
    title : {type : String, required : true},
    date: {type : Date, default : Date.now },
    content : {type : String, required : true}

})
publicationSchema.virtual('resume').get(function () {
    return this.content.slice(0, 10);
});
const Publication = mongoose.model('Publication', publicationSchema);
module.exports = Publication;