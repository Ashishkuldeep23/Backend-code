
let date = new Date()


function printDate(){
    console.log("Today's date is:-",date.getDate())
}



function printMonth(){
    console.log("Month of this year is:-",date.getMonth())
}

function getBatchInfo(){
    console.log("Batch is:-","Lithium")
    console.log("Week is:-","W3D5")
    console.log("Topic:-","Nodejs module system")
}


module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo 