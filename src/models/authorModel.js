const mongoose = require("mongoose")

const authorModel = new mongoose.Schema({
    
    // All Keys

    author_id :{
        type : Number ,
        unique: true,
        required: true
    } ,

    author_name : {
        type : String ,
        required : true
    } ,

    age : Number ,

    address : String


} , {timestamps : true})


module.exports = mongoose.model("author" , authorModel)

