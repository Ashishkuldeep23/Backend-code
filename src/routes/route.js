const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")

// Book controller improted here --->
const bookController = require("../controllers/bookController")


// For book storage --->

// Problem is ==>
// : Create a bookSchema with bookName, authorName, category and year . Create same 2 api's for books i.e. : 1 api to create a new book and another api to get the list of all books. 

router.post("/createBook" , bookController.createBook)

router.get("/showBooks" , bookController.allBook)





// Example only ---->
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// For user Data ---->
router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)

module.exports = router;