const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


// Problem controller present at --->
const problemsAre = require("../controllers/assignment3controller")







// Problem Starts -------------->

// Creating NewBook and author details 
router.post("/createAuthor" , problemsAre.createAuthor)
router.post("/createNewBook" ,problemsAre.createNewBook )


// Get all new Books :::: with ref and populate.

router.get("/getAllNum" , problemsAre.getAllNum)






// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )
    
router.get("/getIdByAuthorName" ,problemsAre.getIdByAuthorName)  









// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

router.post("/findAndUpdateRupee" , problemsAre.findAndUpdateRupee )







// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books..

router.get("/allBooksInBetween" , problemsAre.allBooksInBetween )





router.get("/newAllBooksInBetween" , problemsAre.newAllBooksInBetween )








// Problem Ends -------------->










// Prectice ---------->


let bookModel = require('../models/bookModel')

router.get("/newBooksAre" , async function(req ,res){

    let allNewBooks = await bookModel.find()

    res.send({allBooksAre : allNewBooks.length ,Added : allNewBooks})

})


router.post("/creatingSomeMoreBook" , async function (req , res){

    let data = req.body

    let allNewBooks = await bookModel.create(data)

    res.send({Added : allNewBooks})
})




// Not working till now
// // If else with find() and findOne()
router.get("/chekingFindAndFineOne" , async function(req , res){

    let check = await bookModel.find({authorName : "AkK"})

    console.log( typeof check)


    if( (typeof check) === object ){

        if(check.length > 0){
            res.send({Output : check})
        }else{

            res.send({Output : "No one found"})
        }

    }
    else{

        if(check !== null){
            res.send({Output : check})

        }else{

            res.send({Output : "No one found"})
        }

        
    }

})



// // Update practice



router.post("/updatingOnlyOne", async function (req, res) {
    
    let data = req.body.summary

    let done = await bookModel.findOneAndUpdate( 
        {authorName : "AshishK"} , { $set : {summary : data} }, {new : true }
    )



    res.send({done})
})






// end ----------------------------------------------------------------------->

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/updateBooks", BookController.updateBooks)
router.post("/deleteBooks", BookController.deleteBooks)

// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;