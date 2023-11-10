var fs=require('fs');
var http=require('http');
var server=http.createServer(function name(req,res) {
    
    if (req.url=='/') {
        //Asyn 
        // fs.rename('demo.txt','demoAsyn.txt',function(error) {
        //     if (error) {
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write('file rename failed');
        //         res.end();
        //     }else{
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write('file rename success');
        //         res.end();
        //     }
        // });

        //Sync

        let error=fs.renameSync('demo1.text','demoSync.txt');
        if (error) {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('file rename failed');
            res.end();
        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('file rename success');
            res.end();
        }
    }
});
server.listen(4040);
console.log('server run successfully');