const mongoose = require("mongoose")

const objectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema({

    name: {
        type : String ,
        required : true,
        unique : true
    },
    
	author: {
        type : objectId ,
        ref : 'newAuthor',
        required:true
    },
    
	price:Number,
	ratings:Number,
    publisher: {
        type : objectId ,
        ref : 'newPublisher',
        required:true

    },
    isHardCover : {
        type : Boolean ,
        default : false
    }


}, {timestamps : true })


module.exports = mongoose.model('newBook2' , newBookSchema )