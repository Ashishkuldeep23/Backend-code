



const mongoose = require("mongoose")

const newBookModel = new mongoose.Schema({
    
    // All Keys

    name : {
        type : String ,
        required : true
    },

    author_id : {
        type : Number ,
        required : true
    },

    price : Number ,

    rating : Number


} , {timestamps : true})


module.exports = mongoose.model("newBook" , newBookModel)

