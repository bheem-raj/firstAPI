const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
port = process.env.PORT || 3004;

// const mysql = require('mysql');

// const mc = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'mydb'
// });
 
// // connect to database
// mc.connect();

app.listen(port);
console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var routes = require('./app/routes/approutes'); //importing route

// console.log(routes);

routes(app); //register the route
