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







//Practice -------------------------->

router.get("/practiceMore" , BookController.practice )








// For user 
router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)

module.exports = router;