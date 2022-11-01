const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');

const moment = require("moment")

const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://ashishkuldeep23:l6eq3otW5yV5NOYM@newprojectbyak.qfak24h.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )




app.use (
    function (req, res, next) {

        const today = moment()
        let timeAndDate = today.format('YYYY-MM-DD hh:mm:ss')

        
        let ipAddress = req.socket.remoteAddress.split(",")[0]
        // console.log(ipAddress)

        let endPoint = req.url      // .url and .path both gives endpoint as result.
        // let endPoint = req.path

        console.log(timeAndDate+" , " +ipAddress +" , "+ endPoint)

        next()




        // // logic to get all outPut
        // const today = moment()
        // console.log(today.format('YYYY-MM-DD h:mm:ss a '))     // This line give date and time in moment js
        // console.log(req.socket.remoteAddress.split(",")[0]);     // Geting IP address  
        // console.log(req.url);     // API name (EndPoint Name)


    }
  
  );


  const globalMW = require("./middlewares/newMiddle")

  app.use(globalMW.globalAk)






  

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
