
// / -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33,34, 35, 37, 38]: 36 is missing


// let arr = [33,34, 35, 37, 38]  // 36 is missing


function missingNum(arr){

    let n = arr.length
    let sum = 0
    for(let i=0 ; i<n ; i++){
        sum += arr[i]
    }
    

    // console.log(sum)

    // Formula here ==> [ n+1 * ( first + last ) / 2 ]


    let first = arr[0]
    let last = arr[arr.length-1]

    // console.log(first , last)


    let cal = ( first + last)

    let newLen = n+1

    let result = (newLen * (cal / 2) )

    console.log(result - sum)

    return  result - sum


    // console.log(result)

}


// missingNum(arr)



module.exports.secondSol = missingNum