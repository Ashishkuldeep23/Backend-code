const userModel = require("../models/userModel")

const jwt = require('jsonwebtoken')





// // Regiser new user

const createUserReg = async function (req, res) {


    try {

        // Required fields extracted from obj -->
        const { firstName, mobile, emailId, password, gender } = req.body


        let genderUpdate = req.body.gender.toLowerCase()       // Given data in lower case
        req.body.gender = genderUpdate      // // Updating  the lower case data into 



        if (!firstName || !mobile || !emailId || !password || !gender) {
            return res.status(400).send("Required feild is not given (Mandatory things is not given by user).")
            // // Mandatory things is not given by user thats why i'm using 400 status code
        }




        let data = req.body

        let newData = await userModel.create(data)
        res.status(201).send({ UserAdded: newData })

        // New entry is created thats why i'm using 201 status code



    } catch (e) {
        console.log(e.message)
        res.status(500).send({ staus: false, msg: error.message })
        // // 500 becz some server side error occurs
    }


}








// User LogIn with email and pass And JWT token creation during logIn   

const userLogIn = async function (req, res) {

    try {



        let email = req.body.emailId
        let pass = req.body.password

        if (!email || !pass) return res.status(400).send("Required feild is not given (Mandatory things is not given by user).")

        let getUser = await userModel.findOne({ emailId: email, password: pass })

        if (!getUser) {
            return res.status(400).send("Give valid Email or Password (Given inut is incorrect)")
        }


        let name = getUser.name
        let id = getUser._id


        let token = await jwt.sign({ userName: name, userId: id }, "functionUp-Lithium")

        console.log(name, ":", token)




        res.status(200).send({ staus: true, data: { yourToken: token }, outPut: getUser })
        // LogIn happend thats why i'm using 200 status code

    } catch (err) {
        console.log(err.message)
        res.status(500).send({ staus: false, msg: error.message })
        // // 500 becz some server side error occurs

    }


}








// // // Fetching only one data with userID

const userFetch = async function (req, res) {

    try {



        let id = req.params.userId

        let userData = await userModel.findById(id)

        console.log("Data given to client side")





        res.status(200).send({ Status: true, OutPut: userData })
        // User Fetching data by userId in params and it's own token thats why i'm using 200 status code

    } catch (err) {
        console.log(err.message)
        res.status(500).send({ staus: false, msg: error.message })
        // // 500 becz some server side error occurs

    }

}









// // // Updating data with userID for one user

const userUpdate = async function (req, res) {

    try {

        let id = req.params.userId

        // console.log(id)


        let newUserData = await userModel.findOneAndUpdate(
            { _id: id },
            { $set: { age: 50, gender: "other" } },
            { new: true }
        )

        console.log("Updated data given to client side")

        res.status(200).send({ OutPut: newUserData })
        // Update happend and every thing is ok thats why i'm using 200 status code


    } catch (err) {
        console.log(err.message)
        res.status(500).send({ staus: false, msg: error.message })
        // // 500 becz some server side error occurs

    }


}









// // // Deleting data with userID for one user

const userDelete = async function (req, res) {

    try {

        let id = req.params.userId

        // console.log(id)

        let newUserData = await userModel.findByIdAndUpdate(
            { _id: id },
            { $set: { isDeleted: true } },
            { new: true }
        )


        console.log("Deleted data given to client side")

        res.status(200).send({ OutPut: newUserData })
        // Delet happend and every thing is ok thats why i'm using 200 status code

    } catch (err) {

        console.log(err.message)
        res.status(500).send({ staus: false, msg: error.message })
        // // 500 becz some server side error occurs

    }


}








// Making new post -->
const makePost = async function (req, res) {


    try {

        let id = req.params.userId

        let newPostIs = req.body.posts

        // // If posts key not present in req.body
        if (!newPostIs) return res.status(400).send("Please give some data in post key..... (Mandatory field is not given)")



        let uploadPost = await userModel.findById(id)

        // Pushing Data into Array of posts
        let pushedInPosts = uploadPost.posts.push(newPostIs)


        console.log(uploadPost.posts)

        // // After pushing data need to updated into DB so doing this -->
        let updetedData = await userModel.findOneAndUpdate(
            { _id: id },
            { $push: { posts: newPostIs } },      // $push is mongoose opr. used as $set op. $push takes arr and newItem in object form.
            { new: true }
        )


        res.status(200).send({
            status: "Uploaded",
            "New Post Is": updetedData.posts[updetedData.posts.length - 1],
            allData: updetedData
        })

        // Update happend and every thing is ok thats why i'm using 200 status code


    } catch (error) {

        console.log(error.message)
        res.status(500).send({ staus: false, msg: error.message })
        // // 500 becz some server side error occurs

    }




}









// Fetching All user data -->

const allUserData = async function (req, res) {

    try {


        let allData = await userModel.find()
        res.status(200).send({ OutPut: allData })
        // Fetching data and every thing is ok thats why i'm using 200 status code

    }catch (error) {
        console.log(error.message)
        res.status(500).send({ staus: false, msg: error.message })
        // // 500 becz some server side error occurs


    }


}










module.exports = { createUserReg, userLogIn, userFetch, userUpdate, userDelete, makePost, allUserData }