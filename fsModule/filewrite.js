var fs=require('fs');
var http=require('http');
var server=http.createServer(function name(req,res) {
    
    if (req.url=='/') {
       //Asyn
       fs.writeFile('demo.txt','Hello World',function (error) {
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('file write failed');
                res.end();
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('file write success');
                res.end();
            }
       });
    }
});
server.listen(5050);
console.log('server run successfully');