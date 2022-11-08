const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")


// // // Axios prectice ---->


const axios = require('axios') 



router.get("/getStates" , async function(req , res){


    try{    

        let options = {
            method: 'get' ,

            // This url for All states of India -->
            url:'https://cdn-api.co-vin.in/api/v2/admin/location/states'

            // // // This url for districts of UP
            // -->  'https://cdn-api.co-vin.in/api/v2/admin/location/districts/34'
        }


        let result = await axios(options)



        // let str = CircularJSON.stringify(result);

        // result.JSON.stringify()

        console.log(result)

        // // // Agr below line miss kroge to error ayega --> (TypeError: Converting circular structure to JSON)
        let data = result.data

        console.log(data)
        // console.log(JSON.parse(str))    

        res.status(200).send({status : true , msg : data})




    }catch(e){
        console.log(e)
    }


})


























// // // Imports are ------------------------------->


const problemController = require("../controllers/problemController")
const { tokenCheck ,isValidUserIdInParams, token_Authentication , token_Authorization} = require("../middleware/problemMW")



// // // Assignment - 
// // // Implement Try Catch and status codes in the previous assignment on JWT (authentication and authorization)







// // // Problem Starts here ------------------------->



// // // To fetch all users data (Practice Purpose)
router.get("/allUserData" , problemController.allUserData)



// // pr1 --> For Regestation (All required Data)
router.post("/createUserReg" , problemController.createUserReg)


////  pr2 --> For LogIn (With email and pass)
router.post("/userLogIn" , problemController.userLogIn)   // Jwt created


// // pr3 --> Fetch user detail with userId and token 
router.get("/users/:userId", tokenCheck , token_Authentication , isValidUserIdInParams , token_Authorization ,problemController.userFetch)



// // pr4 --> For Upadte 
router.put("/users/:userId" ,tokenCheck , token_Authentication , isValidUserIdInParams ,token_Authorization , problemController.userUpdate)


// //pr5 --> For Delete
router.delete("/users/:userId" ,tokenCheck , token_Authentication ,isValidUserIdInParams , token_Authorization , problemController.userDelete)



// // Api for create new post --->
router.post("/users/makePost/:userId" , tokenCheck , token_Authentication , isValidUserIdInParams , token_Authorization ,problemController.makePost )







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