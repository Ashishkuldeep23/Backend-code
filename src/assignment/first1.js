

// / -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7]
// 4 is missing


function missingNeturalNum(arr){

    // let arr = [1,2,3,5,6,7]

    // formula will be ==> sumOfArr = (n*n+1)/2 - missingNum
    


    let sum = 0
    let n = arr.length
    for(let i=0 ; i<n ; i++){
    sum += arr[i]

    // // Logic first but here array should be sorted
    // if(arr[i]+1 !== arr[i+1]){
    //     console.log(arr[i]+1)
    //     break
    // }

    }


    // console.log(sum)

 

    let miss = sum - ((n*(n+1))/2)   // Formula given by sir


    // console.log(miss , "miss is ")

    let last = arr[arr.length-1]       // Last element of array


           
    let mainMiss = last - miss   // Minus from last element of arr with  miss num 

    // console.log(mainMiss)


    return mainMiss



}




    // Concept calculated
    // 1 = 8-9
    // 2 = 7-9
    // 3 = 6-9
    // 5 = 4
    // 6 = 3
    // 7 = 2
    // 8 = 1
    // 9 = 0





// missingNeturalNum([1,3,4,5,6,7])




module.exports.firstSol = missingNeturalNum

