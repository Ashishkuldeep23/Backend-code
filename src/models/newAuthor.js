
const mongoose = require('mongoose');

let newAuthorSchema = new mongoose.Schema({
    //All keys here


    authorName:{
        type : String ,
        required : true
    },

	age : Number,

	address : String,

    rating: Number


} , {timestamps : true} )


module.exports = mongoose.model('newAuthor' , newAuthorSchema)
