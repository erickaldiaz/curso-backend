const sqlite3 = require('sqlite3');
let db = new sqlite3.Database('proyecto-backend');

db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');
//id 
//int es para que sea numero entero
//AUTO_INCREMENT es para que automaticamente vaya agregando un 1, en este caso para que el id no se repita

db.close();