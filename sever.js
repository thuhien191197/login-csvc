const express = require('express')
const app = express()
const bodyParser= require("body-parser");
const cors = require('cors');

// let multer = require('multer');
// let upload = multer();
const port = 3000

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(upload.array()); 

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/login', function (req, res) {
  console.log(req.body)
  var user = req.body.user
  var password = req.body.password
  var dataresponse = {}
    if(user && password && user == "admin@123" && password == "123"){
      dataresponse = {
        status : 'ok'
      }
      res.send(JSON.stringify(dataresponse))
    }
    dataresponse = {
      status : 'error'
    }
    res.send(JSON.stringify(dataresponse))
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))