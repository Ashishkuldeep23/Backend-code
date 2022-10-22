
const bookModel = require("../models/bookModel.js")

const createBook =  async function(req , res) {
    let bookData = req.body     //{} JSON
    let savedData = await bookModel.create(bookData)
    res.send({output : savedData})
}

const allBook =  async function(req ,res){

    let allbooks = await bookModel.find()  //DataBase
    
    let arrOfBook = []

    for(key in allbooks){
        arrOfBook.push(allbooks[key]["bookName"])
    }

    // console.log(typeof allbooks)
    // console.log(arrOfBook)

    res.send({books : arrOfBook})
}


module.exports = {createBook , allBook}