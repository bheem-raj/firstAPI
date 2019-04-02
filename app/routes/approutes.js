module.exports = function(app) {
    var todoList = require('../controller/appcontroller');
    var todorole = require('../controller/appcontroller1');
    var todouser = require('../controller/appcontroller2');
    var todoall = require('../controller/appall')
  
    // todoList Routes
   
   
      app.route('/tasks')
      .get(todoList.list_all_tasks);

      app.route('/tasks1')
      .post(todoList.create_a_task);
     
     app.route('/tasks/:taskId')
      .get(todoList.read_a_task)
      .put(todoList.update_a_task)
      .delete(todoList.delete_a_task);
      // };

      app.route('/roles')
      .get(todorole.list_all_role)
      .post(todorole.create_a_role);
     
     app.route('/roles/:taskId')
      .get(todorole.read_a_role)
      .put(todorole.update_a_role)
      .delete(todorole.delete_a_role);

      app.route('/users')
      .get(todouser.list_all_tasks)
      .post(todouser.create_a_task);
     
     app.route('/users/:taskId')
      .get(todouser.read_a_task)
      .put(todouser.update_a_task)
     
    app.get('/gettables',todoall.getAll)
      
    };
  