const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
//importing external package
// const underscore = require('underscore')



// Importing problem 1st function-----
const wel = require("../logger/logger.js")



// Importing problem 2nd function-----
const sec = require("../util/helper.js")





// Importing problem 3rd function-----
const third = require("../validator/formatter.js")




// Importing problem 4th function-----
const fourth = require('../lodash/lodash.js')







router.get('/test-me', function (req, res) {
    // //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)
    // //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)


    // Call lodash package here
    // fourth.lodashFunc("Start Lodash")








    //Problem start here ----------------------------------------------------------------------------------

    // Problem 1st ++++++++++++++++++++

    // console.log(wel.welcome("Ashish"))




    // Problem 2nd +++++++++++++++++

    // sec.printDate()
    // sec.printMonth()
    // sec.getBatchInfo()



    // Problem 3rd +++++++++++++++++

    // third.trim("        FunctionUp      ")
    // third.toLowerCase("FunctionUp")
    // third.toUpperCase("FunctionUp")


    

    // Problem 4th +++++++++++++++++

    // fourth.chunk()
    // fourth.tail()
    // fourth.union()
    // fourth.fromPairs()

    // // Here i'm taking a variable value and printing that value in this file.
    // console.log(fourth.name)


    


    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

