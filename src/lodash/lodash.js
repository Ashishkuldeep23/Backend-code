
// Importing 

const lodash = require('lodash')

// Prectice only
// const arr = [1,[2,[3,[4]],5]]
// function logger(data){
//     console.log(data)
//     let res = lodash.flatMapDeep(arr)
//     console.log(res)
// }



// chunk  fction useing
//Creates an array of elements split into groups the length of size

function chunk (){
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    console.log(lodash.chunk(months , 4))
}




// Tail function
//Gets all but the first element of array.

function tail(){
    let arrOdd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log(lodash.tail(arrOdd))

}




// Union function
// Creates an array of unique values

function union(){
    let arr1 = [2,5,4]
    let arr2 = [5,1,2]
    console.log(lodash.union(arr1 , arr2))

}





// fromPairs function
// object composed from key-value pairs

function fromPairs (){

    console.log(lodash.fromPairs([['horror' , 'The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]))

}




const name = "Ashish Kuldeep"




// Calling all function for testing purpose -----------------------------------------

// chunk()
// tail()
// union()
// fromPairs()











// module.exports.chunk = chunk
// module.exports.tail = tail
// module.exports.union = union
// module.exports.fromPairs  = fromPairs 


// NOTE++++++
// So we can export every fnction one by one as above line 
//OR
// We can export all function in one line as below


//NOTE {Export Variable value} +++++++
// In name variable i'm taking a vaule and exporting that value also , you can see how we use that value in import file.

module.exports = {chunk , tail , union , fromPairs , name }