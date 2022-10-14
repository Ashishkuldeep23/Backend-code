
// Importing 
const { words } = require('lodash');
const lodash = require('lodash')

// Prectice only
// const arr = [1,[2,[3,[4]],5]]
// function logger(data){
//     console.log(data)
//     let res = lodash.flatMapDeep(arr)
//     console.log(res)
// }



// chunk  fction useing

function chunk (){
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    console.log(lodash.chunk(months , 4))
}



function tail(){
    let arrOdd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

    console.log(lodash.tail(arrOdd))


}

function union(){

    let arr1 = [2,5,4]
    let arr2 = [5,1,2]

    console.log(lodash.union(arr1 , arr2))

}



function fromPairs (){

    console.log(lodash.fromPairs([['horror' , 'The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]))

}



module.exports.chunk = chunk
module.exports.tail = tail
module.exports.union = union
module.exports.fromPairs  = fromPairs 
