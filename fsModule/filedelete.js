var http=require('http');
var fs=require('fs');

var server=http.createServer(function (req,res) {
    if (req.url=='/') {
       //Async
    //    fs.unlink('demoAsyn.txt',function (error) {
    //         if (error) {
    //             res.writeHead(200,{'Content-Type':'text/html'});
    //             res.write("file delete failed");
    //             res.end();
    //         }else{
    //             res.writeHead(200,{'Content-Type':'text/html'});
    //             res.write("file delete success");
    //             res.end();
    //         }
    //    });

       // Sync 
       let error=fs.unlinkSync('demoSync.txt');
        if (error) {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("file delete failed");
            res.end();
        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("file delete success");
            res.end();
        }
        
    }
});

server.listen(5000);
console.log('server run successfull');
