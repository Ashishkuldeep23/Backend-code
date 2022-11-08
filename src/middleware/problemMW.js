const jwt = require('jsonwebtoken')




// // // Token given or not --------->

const tokenCheck = function (req, res, next) {

    try {



        let token = req.headers["x-auth-token"]

        // console.log(typeof token)

        // console.log(token)

        if (!token) {

            console.log("x-auth-token key is not given")

            return res.status(400).send({ status: false, msg: "Please give token in Header. Mandatory thing is not given" })
            // // Mandatory things is not given by user thats why i'm using 400 status code
            // // (Bad request) ==> 400

        }



        next()





    } catch (err) {
        console.log(err.message)
        res.status(500).send({ staus: false, msg: err.message })
        // // 500 becz some server side error occurs

    }









}






// // // Token given and now verifing token is verify or not , with .verify() function --------->

const token_Authentication = async function (req, res, next) {


    try {

        let token = req.headers["x-auth-token"]

        // console.log(token)


        // Authentication part -->

        let isTokenValid = await jwt.verify(token , "functionUp-Lithium")    // // ==> {}
        // If this fails then code go into catch block.

        // console.log(isTokenValid)   // Printing All Token data 


        if (Object.keys(isTokenValid).length <= 0) {
            return res.status(401).send({ staus: false ,  msg: "Given Token is not a valid token."  })
            // // 401 ==> Authenication is failed
        }



        // // Going to use {} in next mw -->

        req.tokenPayloadData = isTokenValid



        next()




    } catch (err) {

        console.log("Error Occurs")
        return res.status(500).send({staus:false , msg : err.message , "Custom msg" : "Given JWT Token is NOT Valid, please give correct jwt token."})


    }


}










// Check given userId in path params is vaild or not ---->

// // // Imp. Import for this fuctions ---> 
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const userModel = require("../models/userModel.js")


const isValidUserIdInParams = async function (req, res, next) {

    try {

        let id = req.params.userId

        // console.log(id)


        let isValid = ObjectId.isValid(id)


        if (!isValid) {
            return res.status(400).send({ staus: false, msg: "userId is not a valid given in path params (Mandatory field is incorrect)" })
        }



        let dataInDB = await userModel.findById(id)


        if (!dataInDB) {

            return res.status(400).send({ staus: false, msg: "userId is not present in database (Mandatory field is incorrect)" })

        }


        next()



    } catch (e) {

        console.log("Error Occurs")
        return res.status(500).send({staus:false , msg : err.message , "Custom msg" : "Id is incorrect or not matched with any data present in DB"})

    }


}














// // // Matching token userId with req.params userId to check user is authorized or not ??

const token_Authorization = async function (req, res, next) {

    try {

        // Authorization part -->

        // UserId from token data -->

        // // // Extractng userId from req attributes by below line -->
        let userIdInTokenEx = req.tokenPayloadData.userId


        // // // req.tokenPayloadData is a JSON obj given by .verify() function of jwt

        console.log(userIdInTokenEx)


        // console.log(userIdInTokenEx)    // Printing userId present in Token Data


        // // // Checking Authorisation (userId given from params is equal to with token's userId or not ??)

        let id = req.params.userId

        if (userIdInTokenEx !== id) {
            return res.status(403).send({ Status: false, msg: "Not Authorized , Given token is not matched with given userId in path params" })
            // // frobidden(Not Authorized) ==> 403
        }


        next()



    } catch (err) {

        console.log("Error Occurs")
        return res.status(500).send({staus:false , msg : err.message , "Custom msg" : "Given JWT Token is NOT Valid, please give correct jwt token."})

    }


}









module.exports = { tokenCheck, token_Authentication, isValidUserIdInParams, token_Authorization }

