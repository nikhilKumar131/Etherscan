var express = require('express');
var path = require('path');
var app = express();

//code here

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'))

});



app.listen(443);
// console.log('listening to port 3000');
