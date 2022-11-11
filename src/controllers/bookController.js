
const BookModel= require("../models/bookModel")


// Problem Starts here ---------------------------------->


// createBook : to create a new entry..use this api to create 11+ entries in your collection

const createBook = async function (req, res) {
    let data = req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


// bookList : gives all the books- their bookName and authorName only 

const bookList = async function(req, res){
    let allData = await BookModel.find().select(
        {bookName : 1 , authorName : 1 , _id : 0 }
    )
    res.send({Output : allData})
}




// getBooksInYear: takes year as input in post request and gives list of all books published that year

const getBooksInYear = async function(req ,res){
    let year =  req.body.year
    // console.log(typeof year)
    let allYearBooks = await BookModel.find({"year" : year})
    res.send({ outputLen : allYearBooks.length , output : allYearBooks})

}





// getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
// e.g if body had { name: “hi”} then you would fetch the books with this name
// if body had { year: 2020} then you would fetch the books in this year
// hence the condition will differ based on what you input in the request body


const getParticularBooks = async function(req, res){
    // let bookName = req.query.name
    let saal = req.query.saal
    let writterName = req.query.writterName

    let matched = await BookModel.find({ 
       authorName : writterName , year : saal
    })
    res.send({OutPutLen : matched.length,output : matched})
}




// getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 

const getXINRBooks = async function(req , res){
    let allData = await BookModel.find({
        "prices.indianPrice" : {$in :["Rs100" , "Rs200" , "Rs500"]}
        // {"prices.indianPrice" : {$in :["Rs500" ,"Rs100" , "Rs200"] }}
    })
    res.send({OutPutLen : allData.length ,output : allData})
}





// getRandomBooks - returns books that are available in stock or have more than 500 pages 

const getRandomBooks  = async function(req , res){
    let allData = await BookModel.aggregate([
        { $match: {$or : [{ totalPages: {$gt : 500} } , {stockAvailable : true}] }},
       { $sample: { size: 1 } }
    ])
    res.send({OutPutLen : allData.length ,output : allData})
}



// Problem End here ---------------------------------->



// Practice starts here ------------------------------>

let practice = async function(req , res){

    // // Data In Between  by using $and becoz checkingwith same key.
    // let data = await BookModel.find( {
    //     $and : [ {totalPages : {$gte : 450}} , {totalPages : {$lte : 550}}]
    // })           





    // // Here using path params to take input and finding acc. to input +++
    // // URL look like ==> (localhost:3000/practiceMore/820)
    // // Api look like ==> ("/practiceMore/:pages")
    // let page = req.params.pages
    // let data = await BookModel.find({totalPages : {$gte : page}})





    // // Pagination in action , by using (.skip() and .limit())
    // let page = req.query.page
    // let data = await BookModel.find().skip(3 * (page-1)).limit(3)




    // // Using .sort() ==> .sort() Takes keyname and the 1 or -1
    // // 1 used for accending order(Sbse chhota phle) & -1 used for deccending order(Sbse bada phle) 
    // // .sort() Most work with numeric value , if value is non numeric then it use time when data created.
    // let data = await BookModel.find().sort( {bookName : -1 })





    // // Using multiple method to get top 3 pages book 
    // let data = await BookModel.find().sort( {totalPages : 1 }).limit(3).select({bookName : 1 ,  _id : 0 , totalPages:1})




    // // // Using multiple method to get top 3 (From deccending order) pages book 
    // let data = await BookModel.find().sort( {totalPages : -1 }).limit(3).select({bookName : 1 , _id : 0 , totalPages:1})



    // // Using $ne (not equal to) function/method 
    // let data = await BookModel.find({
    //     authorName : {$ne : "PK"}
    // })




    


    // // Using $nin (Not in List ) method
    // let data = await BookModel.find({
    //     totalPages : {$nin : [500 , 800 ,550 , 300 , 350 ,250 ,850]}
    // }).select({totalPages : 1 ,_id :0})
        



    // //Checking Sort method for other data type values by not understand well.
    // let data = await BookModel.find().sort({bookName : 1})







    // // findId() --> ishme null pane ke liye dyan do ki id ki jo length hai usme changes na aa jaye , agr length change kiya to error ayega null nhi.
    // let data = await BookModel.findById("6358944aacfbe8ed4b297d85")



    // // findOne()  --> ishme null pane ke liye make sure kro ki sirf output hi print krra rhe ho match data kya , na ki matched.length() and all.
    // let data = await BookModel.findOne({authorName : "Ashish"})



    // Next

    let data = await BookModel.find()



    res.send({ Output : data})
}






const getBooksData= async function (req, res) {

    // let allBooks= await BookModel.find( ).count() // COUNT

    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND
    
    // let allBooks= await BookModel.find( { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 
    
    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    // sales : { $in: [10, 17, 82] }
    
    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})
    
    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
    //  let allBooks= await BookModel.findOne( {sales: 10}) 
    //  let allBooks= await BookModel.find( {sales: 10}) 
    
    

    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks= await BookModel.update(   
    //     {  sales: {$gt: 10}  }, //condition
    //     { $set: { isPublished: true} } // the change that you want to make
    //     ) 



    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 
    
    // ASYNC AWAIT
    
    // let a= 2+4
    // a= a + 10
    // console.log(a)
    let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


    // WHEN AWAIT IS USED: - database + axios
    //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
    // console.log(allBooks)
    // let b = 14
    // b= b+ 10
    // console.log(b)
    res.send({msg: allBooks})
}


// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.bookList= bookList
// module.exports.getBooksInYear= getBooksInYear
// module.exports.getParticularBooks= getParticularBooks
// module.exports.getXINRBooks= getXINRBooks
// module.exports.getRandomBooks = getRandomBooks 


module.exports = {createBook , getBooksData ,bookList , getBooksInYear ,getParticularBooks , getXINRBooks , getRandomBooks , practice}