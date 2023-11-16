var express=require('express');

var app=express();

app.get('/',function (req,res) {
    res.send('My first Express Application');
});

app.listen(8080,function () {
    console.log('Server run success');
});