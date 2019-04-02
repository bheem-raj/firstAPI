var User = require('../model/appuser');

exports.list_all_tasks = async function(req, res) {
  let user=await User.getAllTask() 

    console.log('controller')
    // if (err)
    //   res.send(err);
    //   console.log('res', task);
    res.send(user);
  }



exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
// console.log(new_task.task);
// console.log(new_task.user);
// console.log(new_task.status);


  //handles null error 
//    if(!new_task.task || !new_task.status){

//             res.status(400).send({ error:true, message: 'Please provide task/status' });

//         }
// else{
  
  Task.createTask(new_task, function(err, task) {
    
    if (err)
      res.send(err);
    res.json(task);
  });
}
// };


exports.read_a_task = function(req, res) {
  Task.getTaskById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};  