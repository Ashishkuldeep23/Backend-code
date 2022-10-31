const newAuthorModel = require("../models/newAuthor")
const newPublisherModel = require("../models/newPublisher")
const newBook2Model = require("../models/newBook2")







// // 1. Write a POST api that creates an author from the details in request body

const newAuthorCreate = async function (req ,res){

    let author = req.body

    let createdAuthor = await newAuthorModel.create(author)

    res.send({output : createdAuthor})

}



// // 2. Write a POST api that creates a publisher from the details in the request body


const newPublisherCreate =  async function (req ,res){

    let publisher = req.body

    let createdAuthor = await newPublisherModel.create(publisher)

    res.send({output : createdAuthor})

}











// 3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 
// In this api, you have to write a logic that validates the following :
// The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
// The publisherId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.




const newBookCreate =  async function (req ,res){

    let bookData = req.body      // All Data
    let authorId = req.body.author
    let publisherId = req.body.publisher

    const mongoose = require("mongoose")
    let objectId = mongoose.Types.ObjectId




    if( authorId === undefined ){
      return  res.send({output : "Author id is not given"})
    }



    if( ! publisherId ){
       return res.send({output : "Publisher id is not given"})
    }
    

    // objectId.isValid("")


    if(!(objectId.isValid(authorId))){
      return  res.send({output : "Author id is not Valid"})
    }

    if(!(objectId.isValid(publisherId))){
      return  res.send({output : "Publisher id is not Valid"})
    }

    let createdAuthor = await newBook2Model.create(bookData)

    res.send({output : createdAuthor})

}








// 4. Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 



const giveAllNewBoks = async function(req ,res){ 
    // let allNewBooksAre = await newBook2Model.find().populate("author").populate("publisher")
    let allNewBooksAre = await newBook2Model.find().populate( [ 'author'  ,"publisher" ] )     // Both will work same


    // Note :- Imp concept ---->
    // let allNewBooksAre = await newBook2Model.find().populate("author" , {authorName : 1 , _id : 0}).populate("publisher" , {name : 1 , _id : 0})         // populating only on seleced value means , if we going to populate data then we populate only name of that data. 

    res.send({output : allNewBooksAre})

}







// Create a new PUT api /books and perform the following two operations
//  a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
//  b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60) 





// // a) here ----------->


const booksPut = async function(req ,res){
    

    let allPubiliserId = await newPublisherModel.find({name :{$in :['Penguin' , 'HarperCollins']}}).select({_id:1})

    // ["" , ""]

    console.log(allPubiliserId)


    //  // first way (1st)

    // let id1 = allPubiliserId[0]["_id"]
    // let id2 = allPubiliserId[0]["_id"]



    
    // allPubiliserId.forEach( async (ele) => {
        
    //     let id = ele["_id"]
        
    //     console.log(id)
        
    //     let updatesHardCover = await newBook2Model.updateMany(
    //         {publisher : id} ,
    //         {$set : {isHardCover : true}} 
            
    //         )
            
            
            
    //     } )
        
    //     let out = "Update Successfull"



    // // Second way (2nd way)

    let allIdOfPublisher =  allPubiliserId.map( (el) => el._id)    // We can use this  // All id present in this var

    let updateAll = await newBook2Model.updateMany(
        { publisher : {$in : [allIdOfPublisher]} } ,
        { $set : {isHardCover : true}}
    )






    // console.log(out)

    res.send({OutPut : updateAll})


    
}





// // b) here ----------->



const priceIncBy10 = async function(req , res){

    // // Old logic is --> 
    // let allBooksPrice = await newBook2Model.updateMany(
    //     { ratings : {$gte : 3.5}} ,
    //     { $inc : {price : 10}}
    // )





    // New logic --->

    let allAuthorIds = await newAuthorModel.find({rating : {$gte : 3.5 }}).select({_id:1})

    console.log(allAuthorIds)


    allAuthorIds.forEach( async (ele) => {
        let id = ele["_id"]

        console.log(id)

        let updatedPriceBy10 = await newBook2Model.updateMany(
            {author : id} ,
            {$inc : {price : 10}}
        )

    })


    let out = "Update Successfull"





    res.send({output : out})
}











// Aggregate prectice


const aggregateFirstTime = async function(req , res){

    let filteredData = await newBook2Model.aggregate([
        { $group :{_id : "$author" , totalRatingAre : {$sum : "$ratings"}} },
        {$sort : {totalRatingAre : -1}}
    ])


    res.send({out : filteredData})
}








module.exports = {newAuthorCreate , newPublisherCreate , newBookCreate , giveAllNewBoks ,booksPut , priceIncBy10 , aggregateFirstTime}