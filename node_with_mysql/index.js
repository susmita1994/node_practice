var mysql = require('mysql');
var DatabaseConnectionConfig = {host: "localhost", user: "root", password: "", database:"school"}
var con = mysql.createConnection(DatabaseConnectionConfig);

con.connect(function (error){
    if (error){
        console.log('connection fail');
    }
    else{
        console.log('connected success');
       //InsertData(con);
       //UpdateData(con);
       SelectData(con);
      // DeleteData(con)
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

function UpdateData(con) {
    let sql = "UPDATE student SET roll = '02' WHERE id = 2";
    con.query(sql,function (error){
        if (error){
            console.log('data update fail');
        }
        else{
            console.log('data update successfully');
        }
    });
}
function SelectData(con) {
    let sql = "SELECT * FROM student";
    con.query(sql,function (error,result){
        if (error){
            console.log('data select fail');
        }
        else{
            console.log(result);
        }
    });
}

function DeleteData(con) {
    let sql="DELETE FROM student WHERE id = 1";
    con.query(sql,function (error){
        if (error){
            console.log('data delete fail');
        }
        else {
            console.log('data delete successfully');
        }
    });
}
