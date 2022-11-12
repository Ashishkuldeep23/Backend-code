

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




const getAllBooksPresent = async function(req , res) {

    let allBooks = await newBookModel.find()

    res.send({AllBoksAre : allBooks})
}






const getIdByAuthorName =  async function (req , res){

    let id = null  //Put value in to id
    
    let allDataInobj = await authorModel.findOne({author_name : "Chetan Bhagt"})    // If i use find() data give in arr but using fineOne()  data in obj form that's why i am using directly by key name.
    id = allDataInobj.author_id

    // console.log(id)


    // console.log(allDataInobj)


    let allBooks = await newBookModel.find({ author_id : id}).select({_id:0  , name : 1})

    // console.log(allBooks)



    // res.json(allDataInobj)


    res.send({"Id of Author" : id ,"All Books are" : allBooks.length, "Books written by Author" : allBooks})


}








const findAndUpdateRupee = async function(req ,res){

    let bookName = req.body.name

    // console.log(bookName)

    let id = null

    let updatedPrice = await newBookModel.findOneAndUpdate(
        {name : bookName} ,
        { $set  :{price : 200}} ,
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

     
        
        outPut.push({author_name : writter.author_name , author_id : writter.author_id })
        
    }

    console.log(outPut)

    res.send({"Books B-w 50 to 100" : allBookBetween  , "Respective Auhor" : outPut})


    // res.json(ex)


}






const newAllBooksInBetween = async function(req , res){

    const bookList = await newBookModel.find({ price :{$gte : 50 , $lte : 100}}).select({author_id : 1 , name : 1 , _id : 0})


    
    // bookList[1] = 10
    
    // All author id will taken below in authorId (Typeof is Arr) -->
    let authorIds = bookList.map( (index) => index.author_id)
    
    // Empty arr for final output
    let out = []

    for(let i=0 ; i<authorIds.length ; i++){

        // // Empty obj for every book with its author name
        let obj = {}

        let id = authorIds[i]
        
        let writter = await authorModel.findOne({author_id : id })

        let Author_Name = writter.author_name


        // out.push(Author_Name)

        // // BookList is a arr of object , so i can easly destructure by object. After destructure i will get name of bookList[i]["name"] in name var and author_id same as.
        // // After getting these two value i'm putting these values into empty obj that i created in every iteration of loop and putting writter name name also with name of book in empty obj.
        
        let{name , author_id} =  bookList[i]

        // obj.Author_Name = Author_Name

        obj.Name = name 
        obj.Author_Name = Author_Name 
        obj.Author_Id = author_id 


        out.push(obj)


    }




    // let authorList = await authorModel.find({author_id : {$in : authorIds}}).select({author_name : 1 , _id : 0})

    // bookList.forEach()

   

    

    res.send({ "Book With Author Name is" : out })
}













module.exports = {createAuthor , createNewBook ,getIdByAuthorName , findAndUpdateRupee , allBooksInBetween , newAllBooksInBetween ,getAllBooksPresent}