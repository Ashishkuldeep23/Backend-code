

const authorModel = require('../models/authorModel')
const newBookModel = require('../models/newBookModel');



// Creating NewBook and author details 

const createAuthor =  async function (req , res){

    let data = req.body     //Json

    let potedData = await authorModel.create(data)
    res.send({OutPut : potedData})
}


// Creating NewBook and author details 

const createNewBook = async function (req , res){

    let data = req.body

    let potedData = await newBookModel.create(data)
    res.send({OutPut : potedData})
}






const getIdByAuthorName =  async function (req , res){

    let id = null  //Put value in to id
    
    let allDataInobj = await authorModel.findOne({author_name : "Chetan Bhagt"})    // If i use find() data give in arr but using fineOne()  data in obj form that's why i am using directly by key name.
    id = allDataInobj.author_id

    // console.log(id)
    // console.log(allDataInobj)


    let allBooks = await newBookModel.find({ author_id : id}).select({_id:0  , name : 1})

    // console.log(allBooks)


    res.send({"Id of Author" : id ,"All Books are" : allBooks.length, "Books written by Author" : allBooks})
}








const findAndUpdateRupee = async function(req ,res){

    let bookName = req.body.name

    // console.log(bookName)

    let id = null

    let updatedPrice = await newBookModel.findOneAndUpdate(
        {name : bookName} ,
        { $set  :{price : 100}} ,
        {new : true}
    )



    id = updatedPrice.author_id

    let writterName = await authorModel.findOne({author_id : id}).select({author_name : 1 , _id : 0})

    res.send({"Updated Price" : updatedPrice , "Author Name" : writterName})
}








const allBooksInBetween = async function (req ,res){

    let allBookBetween = await newBookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1 ,_id:0 , name : 1})

    let ex = allBookBetween.map( (index) => index.author_id)
    
    // console.log(ex)

    let outPut = []

    for(let i=0 ; i<ex.length ; i++){

        let id = ex[i]
        
        let writter = await authorModel.findOne({author_id : id })
        
        outPut.push({author_name : writter.author_name , author_id : writter.author_id})
        
    }

    // console.log(outPut)

    res.send({"Books B-w 50 to 100" : allBookBetween  , "Respective Auhor" : outPut})
}














module.exports = {createAuthor , createNewBook ,getIdByAuthorName , findAndUpdateRupee , allBooksInBetween}