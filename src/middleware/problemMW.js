const jwt = require('jsonwebtoken')




// // // Token given or not --------->

const tokenCheck = function(req, res , next){

    let token = req.headers["x-auth-token"]

    console.log(typeof token)

    // console.log(token)

    if(! token){

        console.log("x-auth-token key is not given")

        return res.send({status : false , msg : "Please give token in Header."})
    }

    next()

}




// // // Token given and now verifing toke with .verify() function --------->

const tokenVerify_Auth = async function(req , res , next){
    
    let token = req.headers["x-auth-token"]

    // console.log(token)

    try{

        let isTokenValid = await jwt.verify(token , "functionUp-Lithium")

        // console.log(isTokenValid)   // Printing All Token data 

        // UserId from token data -->
        let userIdInTokenEx = isTokenValid.userId

        // console.log(userIdInTokenEx)    // Printing userId present in Token Data

        
        // // // Checking Authorisation (userId given from params is equal to with token's userId or not ??)

        let id = req.params.userId

        if(userIdInTokenEx !== id) return res.send({Status : false , msg : "Not Authorized , Given token is not matched with given userId in pah params" })


        // // next()

        
    }catch(err){

        if(err){
            console.log("Error Occurs")
            return res.send("Given JWT Token is NOT Valid, please give correct jwt token.")
        }

    }


    
    next()


}









module.exports = {tokenCheck , tokenVerify_Auth}

