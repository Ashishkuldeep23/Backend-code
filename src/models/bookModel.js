const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {

    bookName: {
        type : String ,
        required : true,
    }, 
    authorName: String, 
    tags: [String],
    year :{
        type : Number ,
        default : 2021
    },
    totalPages : Number,
    prices: {
        indianPrice: String,    // "Rs500"
        europePrice: String,     // "Eu70"
    },
    stockAvailable : Boolean
   
    
}, { timestamps: true } );






module.exports = mongoose.model('Book', bookSchema) //users













//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
