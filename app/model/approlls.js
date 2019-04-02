var sql = require('./db.js');

//Task object constructor
var Task = function(task){
    this.role = task.role;
    this.status = task.status;
    this.created_at = new Date();
};



// console.log(Task);

Task.createTask = function createUser(newTask, result) {    
        sql.query("INSERT INTO roles set ?", newTask, function (err, res) {
                
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
        sql.query("Select role from roles where id = ? ", taskId, function (err, res) {             
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
    return new Promise(function(resolve,response){
        sql.query("Select * from roles", function (err, res) {

            if(err) {
                console.log("error: ", err);
                resolve(err);
            }
            else{
              console.log('tasks : ', res);  

              resolve(res);
            }
        });  
    })
        
};
Task.updateById = function(id, task, result){
  sql.query("UPDATE roles SET role = ? WHERE id = ?", [task.role, id], function (err, res) {
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
     sql.query("DELETE FROM roles WHERE id = ?", [id], function (err, res) {

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