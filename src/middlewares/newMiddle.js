

const midAk1 = function(req ,res , next){

    console.log("I am in route level middle ware")
    console.log("I am in middle ware created by Ak")

    next()
}



const globalAk = function(req , res , next){
    console.log("Now one more global middle ware is created by fuction and file defined")

    if(!(Object.keys(req.body).length <= 0)){
        res.send("Please type chenge into post")
    }else{
        
        next()
    }


}

module.exports = {midAk1 ,globalAk }