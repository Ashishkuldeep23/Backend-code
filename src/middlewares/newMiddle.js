

const midAk1 = function(req ,res , next){

    console.log("I am in route level middle ware")
    console.log("I am in middle ware created by Ak")

    next()
}



// const globalAk = function(req , res , next){
//     console.log("Now one more global middle ware is created by fuction and file defined")

//     if(!(Object.keys(req.body).length <= 0)){
//         res.send("Please type chenge into post")
//     }else{
        
//         next()
//     }


// }






// // // Validation for req.body by middle ware.

const isBody = function(req ,res ,next){

    
    if( !(req.body)   || (Object.keys(req.body).length <= 0) ){
        return res.send("Please Send some data by using body.")
    }
   
    console.log("Middle ware croosed")
    next()

    


}




module.exports = {midAk1 , isBody  }