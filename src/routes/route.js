const express = require('express');
const router = express.Router();


// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
// const commonMW = require ("../middlewares/commonMiddlewares")





const ProblemController = require("../controllers/problemController")
const { isFreeAppUserPresent , isFreeAppUserTF , isVaildUserId , isVaildProductId} = require('../middlewares/problemMiddleWare')




router.get("/test-me", function (req, res) {

    console.log("Reached")

    // This setting header in response..
    res.setHeader("name" , "Ashish")

    res.send("My first ever api!")
})





// // // jwt practice -------------------->


const jwt = require('jsonwebtoken')
const userModel = require("../models/userModel")


router.post("/createUserJWT" , async function(req , res){

    let data = req.body
    let random = data.name + data.balance

    let userData = await userModel.create(data)

    // // // Creating Jwt token here ----------->
    let token = await jwt.sign({userId : userData._id} , random)

    console.log(token , random)


    res.send({user : userData , tokenCreated : token})
})




router.get("/getUserJWT/:userId" , async function(req , res){


    let id = req.params.userId

    let userData = await userModel.findById(id)

    let token = req.headers.token

    console.log(token)

    // JWT verification

    let status = await jwt.verify(token , "Ak100")

    res.send({JWTstatus : status ,user : userData })

})
















// // // // Problem Start here ------------------------------------------->


// Creating user
router.post("/createUser" , isFreeAppUserPresent , isFreeAppUserTF , ProblemController.createUser) 

// Craeting product
router.post("/createProduct" , ProblemController.createProduct) 


// // Creating Order api

router.post("/createOrder" , isFreeAppUserPresent , isFreeAppUserTF , isVaildUserId , isVaildProductId , ProblemController.createOrder) 




// // // // Problem End here ------------------------------------------->








// // // // Can we set the 'next' input parameter in a route handler?
// // // //What is the primary difference between a middleware and a route handler?
// router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
//     res.send("Ending the cycle")
// }  )

// router.post("/createUser", commonMW.myMiddleware, UserController.createUser)

// router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)

// router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)

// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)











module.exports = router;