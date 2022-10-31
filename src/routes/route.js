const express = require('express');
const router = express.Router();

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")



const problemAre = require("../controllers/problemContoller")



// Problem start here -------------------------------------------------------->


// // .populate('friends', { username: 1, age: 1}) used This








router.post("/newAuthorCreate" , problemAre.newAuthorCreate)



router.post("/newPublisherCreate" , problemAre.newPublisherCreate)



// 3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 
// In this api, you have to write a logic that validates the following :
// The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
// The publisherId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.



router.post("/newBookCreate" , problemAre.newBookCreate)




router.get("/giveAllNewBoks" , problemAre.giveAllNewBoks)




router.put("/booksPut" , problemAre.booksPut)



router.put("/priceIncBy10" , problemAre.priceIncBy10)









// Problem End here --------------------------------------------------------------->

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)



module.exports = router;