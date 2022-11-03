const mongoose = require("mongoose")

const objectId = mongoose.Schema.Types.ObjectId



const orderModel  = new mongoose.Schema({

    
   
	userId: {
        type : objectId ,
        ref : "user",
        required : true
    } ,
	productId:{
        type : objectId ,
        ref : "product" , 
        required : true
    }, 
	amount: Number,
	isFreeAppUser: {
        type : Boolean ,
        default : false
    }, 
	date:{
        type : Date ,
        default : Date.now()
    }


}, {timestamps:true})


module.exports = mongoose.model("order" , orderModel)