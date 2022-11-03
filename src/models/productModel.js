const mongoose = require("mongoose")


const productModel  = new mongoose.Schema({

   
	name: String,
	category : String,
	price:Number

   
} , {timestamps:true})


module.exports = mongoose.model("product" , productModel)