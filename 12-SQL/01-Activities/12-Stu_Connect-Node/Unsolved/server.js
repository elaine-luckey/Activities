const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//creating the db variable to create a connection with the db
const db = mysql.createConnection(
  {
  //setting the host to be the local host
    host: 'localhost',
//using the root as the user
    user: 'root',
//setting the password to be an empty string
    password: '',
//setting the database to be the classlist_db, as listed in the schema.sql file
    database: 'classlist_db'
  },
//log the connected to the classlist_db database
  console.log(`Connected to the classlist_db database.`)
);

//initiate a query to select all the results from the student table
//creating a function that will log the results, but throw an error if the results are not displayed
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

//If the app displays a 404 error, end the program
app.use((req, res) => {
  res.status(404).end();
});

//Once the selected port has started log 'server running on port' with the port number listed as well
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
