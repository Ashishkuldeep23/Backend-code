const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();



// Assignment solve here --------------------------------->
// Problem start here ----------------------------------->

// // Write a POST /players api that creates a new player ( i.e. that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data)


let players =[
   
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": ["swimming"]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": ["soccer"]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": ["soccer"]
       },
]




router.post("/players" , function(req , res){

    console.log("Practice")
    let take = req.body     // object {}

    let check = 0

    for(let i=0 ; i<players.length ; i++){
        if(players[i]["name"]  === take.name){
           check++
           break 
        }
    }

    if(check === 0){
        players.push(take)
    }
    
    
    // console.log(take)
    console.log(players)

    res.send(JSON.stringify(players))

})











// Assignment over here ------------------------------------------------------------>
router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})




// git post prectice here --------------------------------------------------------------------


let arr = [
    {name : "Ashutosh"},
]


router.post("/testing",function(req,res){
    
    console.log("Practice")
    let take = req.body

    let check = 0

    for(let i=0 ; i<arr.length ; i++){

        if(arr[i]["name"]  === take.name){
           check++
           break
            
        }

    }

    if(check === 0){
        arr.push(take)
    }
    
    
    // console.log(take)
    console.log(arr)
    res.send("All Ok "+JSON.stringify(arr))

})





module.exports = router;