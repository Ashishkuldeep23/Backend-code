const jwt = require('jsonwebtoken')




// // // Token given or not --------->

const tokenCheck = function (req, res, next) {

    try {



        let token = req.headers["x-auth-token"]

        console.log(typeof token)

        // console.log(token)

        if (!token) {

            console.log("x-auth-token key is not given")

            return res.status(400).send({ status: false, msg: "Please give token in Header. Mandatory thing is not given" })
            // // Mandatory things is not given by user thats why i'm using 400 status code

        }



        next()




    } catch (err) {
        console.log(err.message)

        res.status(500).send({ staus: false, msg: error.message })
    }





    // next()



}




// // // Token given and now verifing toke with .verify() function --------->

const tokenVerify_Auth = async function (req, res, next) {


    try {

        let token = req.headers["x-auth-token"]

        // console.log(token)



        // Authentication part -->

        let isTokenValid = await jwt.verify(token, "functionUp-Lithium")
        // If this fails then code go into catch block.

        // console.log(isTokenValid)   // Printing All Token data 





        // Authorization part -->

        // UserId from token data -->
        let userIdInTokenEx = isTokenValid.userId

        // console.log(userIdInTokenEx)    // Printing userId present in Token Data


        // // // Checking Authorisation (userId given from params is equal to with token's userId or not ??)

        let id = req.params.userId

        if (userIdInTokenEx !== id) {
            return res.status(403).send({ Status: false, msg: "Not Authorized , Given token is not matched with given userId in pah params" })
        }

        next()

        


    } catch (err) {

        if (err) {
            console.log("Error Occurs")
            return res.status(500).send("Given JWT Token is NOT Valid, please give correct jwt token.")
        }

    }



    // next()


}









module.exports = { tokenCheck, tokenVerify_Auth }

