const userModel = require("../models/userModel")

const jwt = require('jsonwebtoken')





// // Regiser new user

const createUserReg = async function(req , res){

    const {firstName , mobile , emailId , password}  = req.body


    let genderUpdate  = req.body.gender.toLowerCase()


    if(!firstName || !mobile  || !emailId || !password){
        return res.send("Required feild is not given.")
    }
    

    req.body.gender = genderUpdate

    let data = req.body

    let newData = await userModel.create(data)
    res.send({UserAdded : newData})
}








// User LogIn with email and pass And JWT token creation during logIn   

const userLogIn = async function(req , res){

    let email = req.body.emailId 
    let pass = req.body.password

    let getUser = await userModel.findOne({emailId : email , password : pass})

    if(!getUser){
        return res.send("Give valid Email or Password")
    }


    let name = getUser.name
    let id = getUser._id


    let token = await jwt.sign({userName : name  , userId : id} , "functionUp-Lithium" )

    console.log(name ,":",token )
    res.send({staus : true , data : { yourToken : token } , outPut : getUser })

}








// // // Fetching only one data with userID

const userFetch = async function(req , res){

    let id = req.params.userId

    let userData = await userModel.findById(id)

    console.log("Data given to client side")





    res.send({Status : true , OutPut : userData})
}









// // // Updating data with userID for one user

const userUpdate = async function(req , res){

    let id = req.params.userId

    // console.log(id)


    let newUserData = await userModel.findOneAndUpdate(
        {_id : id} ,
        {$set : { age : 50 , gender : "other" }} ,
        {new : true}
    )

    console.log("Updated data given to client side")

    res.send({OutPut : newUserData})

}









// // // Deleting data with userID for one user

const userDelete = async function(req ,res){
    let id = req.params.userId

    // console.log(id)

    let newUserData = await userModel.findByIdAndUpdate(
        {_id : id} ,
        {$set : {isDeleted : true}} ,
        {new : true}
    )


    console.log("Deleted data given to client side")

    res.send({OutPut : newUserData})

}







// Making new post -->
const makePost = async function(req , res){


    let id = req.params.userId

    let newPostIs = req.body.posts


    // // If posts key not present in req.body
    if(!newPostIs) return res.send("Please give some data in post key.....")

    let uploadPost = await userModel.findById(id)

    // Pushing Data into Array of posts
    let pushedInPosts = uploadPost.posts.push(newPostIs)

  
    console.log(uploadPost.posts)
   
    // // After pushing data need to updated into DB so doing this -->
    let updetedData = await userModel.findOneAndUpdate(
        {_id : id},
        {$push : {posts : newPostIs}},      // $push is mongoose opr. used as $set op. $push takes arr and newItem in object form.
        {new:true}
    )


    res.send({
        status : "Uploaded" ,
        "Uploaded Post Is" : updetedData.posts[updetedData.posts.length - 1] ,
        allData : updetedData
    })

}







// Fetching All user data -->

const allUserData = async function(req ,res){
    let allData = await userModel.find()
    res.send({OutPut : allData})
}








module.exports = {createUserReg , userLogIn ,userFetch ,userUpdate , userDelete , makePost , allUserData}