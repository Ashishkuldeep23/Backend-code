let axios = require('axios')



const getWeatherByLocation = async function (req, res) {

    try{

        let {q , appid } = req.query



        let options = {
            method : 'get' ,
            url : `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        

        let result = await axios(options)
        
        let data = result.data

        console.log(data)
        res.status(200).send({ temprature : data.main.temp , data: data })





    }catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message })
    }




}








const getWeatherOfManyCities = async function(req,res){

    try {

        const apikey = req.query.appid;

        const cities = ["Bengaluru" , "Mumbai" , "Delhi" , "Kolkata" , "Chennai" , "London" , "Moscow"]

        const temp = []

        for (let i = 0; i < cities.length; i++) {

            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${apikey}`)

            temp.push({city: cities[i], temp: response.data.main.temp});

        }

        console.log(temp)    // // // All city with temp.

        // Sorting acc. to temp -->
        temp.sort((a, b) => a.temp - b.temp)

        res.status(200).send({Data : temp})

    } catch (error) {
        console.log(err)
        res.status(500).send({Error : error.message})
    }
}









module.exports = {getWeatherByLocation , getWeatherOfManyCities }