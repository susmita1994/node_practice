var express=require('express');

var app=express();

app.get('/',function (req,res) {
    res.send('<h1>Welcome to Home Page</h1>');
});

app.get('/about',function (req,res) {
    res.send('<h1>This is About Page</h1>');
});

app.get('/contact',function (req,res) {
    res.send('<h1>This is Contact Page</h1>');
});

app.listen(8080,function () {
    console.log('Server run success');
});