var mysql = require('mysql');

var connection = mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'Initial1',
    database:'japanese'
});

const query=function(sql,sqlParams,callback){
    connection.getConnection(function(err,conn){
      if(err){
        callback(err,null,null);
      }else{
        conn.query(sql,sqlParams,function(qerr,vals,fields){
          conn.release();
          callback(qerr,vals,fields);
        });
      }
    });
  };

  
module.exports = query;