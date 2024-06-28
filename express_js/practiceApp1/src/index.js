var path=require('path');
var express=require('express');

var app=express();

const staticPath=path.join(__dirname,'../public');
// build in middleware
app.use(express.static(staticPath));
app.get('/',function (req,res) {
    res.send('<h1>Hello World</h1>');
});
app.get('/feature',function (req,res) {
    res.send('<h1>Hello World</h1>');
});
app.listen(8080,function () {
    console.log('Server run success');
});