const mongoose = require("mongoose")

const bookschema = new mongoose.Schema({
    // All key here For entry
    bookName : {
        type : String ,
        unique : true ,
        required : true  
    }, 

    authorName : {
        type : String ,
        required : true
    },

    category : String ,

    year : Number 

} , {timestamps : true} )


module.exports = mongoose.model("Book" , bookschema)

// Book ==> books 