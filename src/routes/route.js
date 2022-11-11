const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")


const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// For Book 

// Problem Starts here ---------------------------------->

router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

router.get('/bookList' , BookController.bookList)

router.post('/getBooksInYear' , BookController.getBooksInYear)

router.get("/getParticularBooks" , BookController.getParticularBooks)

router.get("/getXINRBooks" , BookController.getXINRBooks)

router.get("/getRandomBooks" , BookController.getRandomBooks )

// Problem End here ---------------------------------->

// Prectice stats here -------------------------->

const bookModel = require("../models/bookModel") 

// p1 --> get all books present in DB

router.get("/getAllBookFromDB" , async function(req ,res){

    let newData = await bookModel.find({authorName: "PK"})

    res.status(200).send({Data : newData , msg : "All ok"})
})


// // p2 --> update book data acc. to body

router.put("/upadetBookByBody" , async function (req ,res){

    let data = req.body

    let newData = await bookModel.updateMany(
        {authorName: "PK"} ,
        { $set :  data }
    )

    res.status(200).send({Data : newData , msg : "All ok"})



})







//Practice -------------------------->

router.get("/practiceMore" , BookController.practice )








// For user 
router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)

module.exports = router;