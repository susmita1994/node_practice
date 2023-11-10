var fs=require('fs');
var http=require('http');
var server=http.createServer(function name(req,res) {
    //read file 
    if (req.url=='/') {
        //Asyn 
        // fs.readFile("home.html",function(error,data) {
        //     res.writeHead(200,{'Content-Type':'text/html'});
        //     res.write(data);
        //     res.end();
        // });

        //sync
       let mydata=fs.readFileSync('home.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(mydata);
        res.end();
    }
});
server.listen(4040);
console.log('server run successfully');