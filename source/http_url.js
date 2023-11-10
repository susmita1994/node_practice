var http=require('http');
var url=require('url');
var server=http.createServer(function (req,res) {
   var myUrl="https://cygnusweb.in/atdc_new/publication?faculty=&year=2023&DataTable_length=10";
   var myURLObj=url.parse(myUrl,true); //split the url
   var myHostName=myURLObj.host;
    var myPathName=myURLObj.pathname;
    var mySearchName=myURLObj.search;

    res.writeHead(200,{'Content-Type':'text/html'});
    //res.write(myHostName);
    res.write(myPathName);
   // res.write(mySearchName);
    res.end();
});
server.listen(5000);
console.log('server created successfully');