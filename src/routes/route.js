const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();


const first = require("../assignment/first1")
const second = require("../assignment/second2")


// solution of 1st

router.get("/sol1" , function(req , res){

   let arr = [1,2,4,5,6,7]

    let callinFunc = first.firstSol(arr)  // calling fun

    let result = (arr+" missing number is ==> "+callinFunc)

    console.log(result);

    res.send(JSON.stringify(result))

})


// solution of 2nd

router.get("/sol2" , function(req , res){

    let arr = [33,34, 36, 37, 38] 

    let callinFunc = second.secondSol(arr)

    let result = (arr+" missing number is ==> "+callinFunc)
    
    console.log(result)

    res.send(JSON.stringify(result))
})



module.exports = router;