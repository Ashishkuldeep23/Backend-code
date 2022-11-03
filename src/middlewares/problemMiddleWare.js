
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")











const isFreeAppUserPresent = function(req , res , next){


    let headers = req.headers

    // console.log(headers)


    // // // Validation for isFreeAppUser key given or not

    let isFreeAppUser = headers.isfreeappuser

    if(!(isFreeAppUser)){
        return res.send("'Please give status of isFreeAppUser , true or false.(request is missing a mandatory header)")
    }else{
        next()
    }


}





const isFreeAppUserTF = function(req , res , next){

    let headers = req.headers


    // // isFreeAppUser === true
    if(headers.isfreeappuser == "true"){
        // console.log(true)
        // // // Upadte logic in the req.
        req.isFreeAppUser = true    // Set request attri

    }

    next()


    // console.log(req.isFreeAppUser)

    
}




const isVaildUserId = async function(req , res , next){

    let id = req.body.userId

    let check = await userModel.findById(id)

    // console.log(check)

    if(check === null){

        return res.send("User not Found (Please Give valid User Id)")
    }

    next()

}


const isVaildProductId = async function(req , res , next){

    let id = req.body.productId

    let check = await productModel.findById(id)

    // console.log(check)

    if(check === null){

        return res.send("Product not found (Please Give valid Product Id)")
    }

    next()

}
















module.exports = { isFreeAppUserPresent , isFreeAppUserTF , isVaildUserId , isVaildProductId}