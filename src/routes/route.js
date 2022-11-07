const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")


// // // Imports are ------------------------------->


const problemController = require("../controllers/problemController")
const { tokenCheck , tokenVerify_Auth } = require("../middleware/problemMW")




// // // Problem Starts here ------------------------->



// // // To fetch all users data (Practice Purpose)
router.get("/allUserData" , problemController.allUserData)



// // pr1 --> For Regestation (All required Data)
router.post("/createUserReg" , problemController.createUserReg)


////  pr2 --> For LogIn (With email and pass)
router.post("/userLogIn" , problemController.userLogIn)   // Jwt created


// // pr3 --> Fetch user detail with userId and token 
router.get("/users/:userId", tokenCheck , tokenVerify_Auth ,problemController.userFetch)



// // pr4 --> For Upadte 
router.put("/users/:userId" ,tokenCheck , tokenVerify_Auth, problemController.userUpdate)


// //pr5 --> For Delete
router.delete("/users/:userId" ,tokenCheck ,tokenVerify_Auth , problemController.userDelete)



// // Api for create new post --->
router.post("/users/makePost/:userId" , tokenCheck ,tokenVerify_Auth , problemController.makePost )







// // // Problem End here ------------------------->







router.get("/test-me", function (req, res) {

    //console import variable only -->
    // console.log(problemController)
    // console.log(userController)



    // console.log(req.headers)

    // console.log(req.getHeader("host"))


    res.setHeader("name" , "Ashish")

    console.log(res.getHeader('name'))

    res.send("My first ever api!")

})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId", userController.updateUser)
// router.delete('/users/:userId', userController.deleteUser)




module.exports = router;