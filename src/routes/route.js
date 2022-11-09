const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")




// // // Problem Apis are -->

// // Problem 1 --------------------------------------------------------------------------------------->

const problem1stController = require('../controllers/problemConAre/problem1')

// 1st --> all state 
router.get("/allStates" , problem1stController.allStates)


// 2nd --> all district 
router.get("/allDistrict/:state_id" , problem1stController.allDistrict)

// 3rd --> all session by district id
router.get("/allSessionByDistrictId" , problem1stController.sessionByDistrictId)







// // Problem 2 --------------------------------------------------------------------------------------->

const problem2ndController = require('../controllers/problemConAre/problem2')

// 1st --> 
router.get("/getWeatherByLocation" , problem2ndController.getWeatherByLocation)


// 2nd -->
router.get("/getWeatherOfManyCities" , problem2ndController.getWeatherOfManyCities)







// // Problem 3 ----------------------------------------------------------------------->


const problem3rdController = require('../controllers/problemConAre/problem3')

// 1st --> Get all meme
router.get("/getAllMemes" , problem3rdController.getAllMemes)

// 2nd --> One meme acc. to id
router.get("/getOwnMeme" , problem3rdController.getOwnMeme)





// // // Problem end here -------------------->










router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;