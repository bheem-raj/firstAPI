var Task = require('../model/appmodel.js');
var Role = require('../model/approlls.js');
var User = require('../model/appuser.js');

// exports.list_all_tasks = function(req, res) {
//   Task.getAllTask(function(err, task) {

//     console.log('controller')
//     if (err)
//       res.send(err);
//       console.log('res', task);
//     res.send(task);
//   });
// };

exports.getAll =  async function(req, res) {
    // let task = await Task.getAllTask() 
    // let role = await Role.getAllTask()
    // let user= await User.getAllTask() 
    let result = await Promise.all([Task.getAllTask(),Role.getAllTask(),User.getAllTask()]);   

    //console.log(result);
    
    res.send({
        task:result[0],
        Role:result[1],
        User:result[2]
    });
    // res.send({
    //     task,
    //     role,
    //     user
    // });
  };
 

// function getAllTask(){
//     return new Promise(function(resolve){
//         Task.getAllTask(function(err, task1) {
//             if (err) resolve(err);
//             else resolve(task1);
//           });
//     })
// }

// function getAllRole(){
//     return new Promise(function(resolve){
//        Role.getAllTask(function(err, role1) {
//             if (err) resolve(err);
//             else resolve(role1);
//           });
//     })
// }

// function getAllUser(){
//     return new Promise(function(resolve){
//         User.getAllTask(function(err, user1) {
//             if (err) resolve(err);
//             else resolve(user1);
//           });
//     })
// }
