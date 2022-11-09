let axios = require('axios')





const getOwnMeme = async function (req, res) {

    try {
        let { template_id, text0, text1, username, password } = req.query

        if (!template_id || !text0 || !username || !password) {
            return res.status(400).send({ msg: "Mandatory field is not given" })
        }

        let options = {
            method: 'get',
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }


        let result = await axios(options)
        let data = result.data

        console.log(data)
        res.status(200).send({ data: data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}





const getAllMemes = async function (req, res) {

    try {

        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }

        let result = await axios(options)

        let data = result.data

        console.log(data)
        res.status(200).send({ data: data })


    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}






module.exports ={getOwnMeme , getAllMemes}