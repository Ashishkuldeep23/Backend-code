
// let arr = [33,34, 35, 37, 38]  // 36 is missing


function missingNum(arr){

    let n = arr.length
    
    let sum = 0
    for(let i=0 ; i<n ; i++){
        sum += arr[i]
    }

    // console.log(sum)

    let first = arr[0]
    let last = arr[arr.length-1]

    // console.log(first , last)


    let cal = ( first + last)

    let newLen = n+1

    let result = (newLen * (cal / 2) )

    console.log(result - sum)

    let finalRes = result - sum

    return finalRes


    // console.log(result)

}


// missingNum(arr)



module.exports.secondSol = missingNum