const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

const newMW = require("../middlewares/newMiddle")

router.get("/testMe", function (req, res) {
    res.send("My first ever api!")
})


// // some more api for problem 


router.get("/firstApi", function (req, res) {
    res.send("1.)This is first api for check endpoint.")
})


router.get("/secondApi", function (req, res) {
    res.send("2.)This is second api for check endpoint.")
})



// Making validaton for body content by middle ware

router.post("/newlyApi1" , newMW.isBody   , function(req , res){

    let data = req.body

    console.log("Now i am in api")
    res.send ({msg : data})
})









// // // Practice Some delete API's  ----------------------------->


const expsModel = require("../models/expsModel")



router.get("/deleteSomeData" , async function(req, res){

    // let data = req.body

    // let newData = await expsModel.create(data)


    let newData = await  expsModel.findOneAndReplace({name : "Ashi"} , {age : 50})
    res.send({output : newData})

})
















// router.post("/createBook", BookController.createBook  )




// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)


// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")
//         next ()
//     }
//     else {
//         res.send ("Please login or register")
//     }
// }

// // e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, UserController.feeds)
// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)





router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)



// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)




module.exports = router;