const express = require("express");
const app = express()
const bodyPerser = require ('body-parser')

app.get('/',function (req,res) {
    res.sendFile(__dirname +'/index.html')
})
app.use(bodyPerser.urlencoded({extended:true}))
app.post('/',function (req,res) {
  var num1=Number(req.body.num1)
  var num2=Number(req.body.num2)
  var result = num1 + num2
    res.send('yo answer is '+result)
})
app.get('/bmi',function (req,res) {
    res.sendFile(__dirname +'/bmi.html')
})
app.post('/bmi',function (req,res) {
    var weight =parseFloat(req.body.weight)
    var height =parseFloat(req.body.height)
    var Bmi = weight /(height*height)
    res.send('your bmi is '+Bmi)
})

app.listen(9600,function (req,res) {
    console.log('the server has started');
})   