var mysql = require('mysql');
var DatabaseConnectionConfig = {host: "localhost", user: "root", password: "", database:"school"}
var con = mysql.createConnection(DatabaseConnectionConfig);

con.connect(function (error){
    if (error){
        console.log('connection fail');
    }
    else{
        console.log('connected success');
       InsertData(con);
       
    }
});

function InsertData(con) {
    let sql= "INSERT INTO student( name,class,roll,phone) VALUES ('Pampa Mandal','2nd yr',01,79084568756);"
    con.query(sql,function (error){
        if(error){
            console.log('data insert fail');
        }
        else{
            console.log('data insert successfuly');
        }
    });
}