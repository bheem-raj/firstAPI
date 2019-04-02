var Role = require('../model/approlls');

exports.list_all_role = async function(req, res) {
  let role = await Role.getAllTask()

    console.log('controller')
    // if (err)
    //   res.send(err);
    //   console.log('res', task);
    res.send(role);
  
};



exports.create_a_role = function(req, res) {
  var new_role = new Role(req.body);


  //handles null error 
//    if(!new_role.role || !new_role.status){

//             res.status(400).send({ error:true, message: 'Please provide task/status' });

//         }
// else{
  
  Role.createTask(new_role, function(err, role) {
    
    if (err)
      res.send(err);
    res.json(role);
  });
}
// };


exports.read_a_role = function(req, res) {
  Role.getTaskById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_role = function(req, res) {
  Role.updateById(req.params.taskId, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_role = function(req, res) {


  Role.remove( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};  