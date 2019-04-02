var sql = require('./db.js');

//Task object constructor
var Task = function(task){
    this.user = task.user;
    this.status = task.status;
    this.created_at = new Date();
};
Task.createTask = function createUser(newTask, result) {    
        sql.query("INSERT INTO users set ?", newTask, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Task.getTaskById = function createUser(taskId, result) {
        sql.query("Select user from users where id = ? ", taskId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Task.getAllTask = function getAllTask(result) {
    return new Promise(function(response,reject){
        sql.query("Select * from users", function (err, res) {

            if(err) {
                console.log("error: ", err);
                response( err);
            }
            else{
              console.log('tasks : ', res);  

              response(res);
            }
        });   
    })
        
};
Task.updateById = function(id, task, result){
  sql.query("UPDATE users SET user = ? WHERE id = ?", [task.user, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Task.remove = function(id, result){
     sql.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Task;