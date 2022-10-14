

function trim(str){
    console.log("Your new string after trim :-" , str.trim())

}


function toLowerCase(str){
    console.log("In lower case:-",str.toLowerCase())
}

function toUpperCase(str){
    console.log("In upper case:-",str.toUpperCase())
}


module.exports.trim = trim
module.exports.toLowerCase = toLowerCase
module.exports.toUpperCase = toUpperCase