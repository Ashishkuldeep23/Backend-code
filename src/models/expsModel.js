
const mongooose = require("mongoose")


const expsModel = new mongooose.Schema( {
    name : String
} , {timestamps : true} )


module.exports = mongooose.model("exps" , expsModel)
