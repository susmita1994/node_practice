var http=require('http');
var fs=require('fs');

var server=http.createServer(function (req,res) {
    if (req.url=='/') {
        //Asyn
        // fs.exists('demoAsyn.txt',function(result) {
        //     if (result) {
        //         res.end('file exists');
        //     }else{
        //         res.end('file not exists');
        //     }
        // });

        // Sync
        let result=fs.existsSync('demoSync.txt');
        if (result) {
            res.end('file is exists');
        }else{
            res.end('file not exists');
        }
        
    }
});

server.listen(5000);
console.log('server run successfull');
