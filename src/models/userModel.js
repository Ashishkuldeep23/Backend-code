

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: {
        type : String ,
        required : true
    },
    
    lastName: String,

    mobile: {
        type: String,
        required: true
    },

    emailId: {
        type:String ,
        required : true, 
        unique : true
    },

    password: {
        type:String ,
        required : true
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"]        // Male --> Error
    },

    isDeleted : {
        type : Boolean ,
        default : false 
    },

    age: Number ,


    posts: {
        type: Array,
        default : []
    }


   
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)