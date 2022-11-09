let axios = require("axios")





const allStates = async function (req, res) {

    try {

        let result = await axios.get("https://cdn-api.co-vin.in/api/v2/admin/location/states")

        console.log(result.data)

        res.status(200).send({ msg: result.data })


    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }




}



const allDistrict = async function (req, res) {



    try {

        let status_id = req.params.state_id

        console.log(status_id)

        let result = await axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${status_id}`)

        let data = result.data

        console.log(data)

        res.status(200).send({ msg: data })


    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }


}






const sessionByDistrictId = async function (req, res) {

    try {

        let { district_id, date } = req.query

        let result = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`)

        let data = result.data

        console.log(data)

        res.status(200).send({ msg: data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }


}








module.exports = {allStates , allDistrict , sessionByDistrictId }