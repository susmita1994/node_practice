var express=require('express');

var app=express();

app.get('/',function (req,res) {
    res.send('<h1>My first Express Application</h1>');
});

app.listen(8080,function () {
    console.log('Server run success');
});