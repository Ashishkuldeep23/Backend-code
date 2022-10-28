



const mongoose = require("mongoose")

const objecId = mongoose.Schema.Types.ObjectId

const newBookModel = new mongoose.Schema({
    
    // All Keys

    name : {
        type : String ,
        required : true
    },

    author_id : {
        type : objecId ,
        ref : 'author'
    },

    price : Number ,

    rating : Number


} , {timestamps : true})


module.exports = mongoose.model("newBook" , newBookModel)

