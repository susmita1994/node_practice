var express=require('express');

var app=express();

app.get('/',function (req,res) {
    res.send('<h1>Home Page</h1>');
});

app.get('/about',function (req,res) {
    res.send('<h1>About Page</h1>');
});

app.get('/contact',function (req,res) {
    res.send('<h1>Contact Page</h1>');
});

app.listen(8080,function () {
    console.log('Server run success');
});