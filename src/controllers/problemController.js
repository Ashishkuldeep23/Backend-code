const userModel = require("../models/userModel")
const productModel = require("../models/productModel")
const orderModel = require("../models/orderModel")



const createUser =  async function(req , res){

    let data = req.body

    console.log(req.isFreeAppUser)

    let isFreeAppUserValUe = req.isFreeAppUser

    req.body.isFreeAppUser = isFreeAppUserValUe


    let newUser = await userModel.create(data)

    res.send({output : newUser})

} 





const createProduct = async function(req , res){

    let data = req.body

    let newEntry = await productModel.create(data)

    res.send({OutPut : newEntry})

}





const createOrder = async function(req ,res){
    let data = req.body

    let userId = req.body.userId
    let productId = req.body.productId







    let isFreeAppUserValUe = req.isFreeAppUser

    let newData ;

    if(isFreeAppUserValUe){

        req.body.isFreeAppUser = isFreeAppUserValUe

        data.amount = 0    // Updating amount 0 if my user is free app user
        let newOrder =  await orderModel.create(data)

        newData = {"New order details" : newOrder}
        

    }else{

        let productPrice = await productModel.findById(productId)
        // console.log(productPrice.price)
        let actualProductPrice = productPrice.price




        let userBalance = await userModel.findById(userId)
        // console.log(userBalance.balance)
        let actualUserBalace = userBalance.balance





        if(actualUserBalace > actualProductPrice){



            let userNewBalance = await userModel.findByIdAndUpdate(
                {_id : userId} ,
                // {$inc:{balance : -actualProductPrice}} ,    // // or
                {$set:{balance : actualUserBalace - actualProductPrice}} ,
                {new : true}
            )




            const newOrder = await orderModel.create({
                
                userId: userId,
                productId: productId, 
                amount: actualProductPrice,
                isFreeAppUser: false        // // // Becz knowing if false then code reached here ....
            })



            // newData = await orderModel.create(data)
            newData = {"New order details " : newOrder ,"Updated user balance " : userNewBalance }
 

        }else{
            return res.send("Not Enough Balance to buy.")
        }




    }



   

    res.send({out : newData})


}







module.exports = {createUser ,createProduct , createOrder}
